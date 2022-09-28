import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface MenuItem {
  id: string;
  title: string;
  url?: string;
  expanded: boolean;
  isActive: boolean;
  items?: MenuItem[];
}

const isActive = (item: MenuItem, activeUrl: string): boolean => {
  return (
    item.url === activeUrl || !!item.items?.some((i) => isActive(i, activeUrl))
  );
};

const getAllActiveIds = (items: MenuItem[], ac: string) => {
  const ids : string[] = [];
  items.forEach(item => {
    const activeInItems = getAllActiveIds(item.items || [], ac);

    if (activeInItems.length) {
      [...activeInItems, item.id].forEach(x => ids.push(x));
    }
    else if(item.url === ac) {
      ids.push(item.id);
    }

  });
  return ids;
};

@Component({
  selector: 'sm-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  private _activeUrl: string = '';

  @Input() set activeUrl(activeUrl: string) {
    this._activeUrl = activeUrl || '';
    this.addInitialActiveUrlIdIntoExpandedList();
  }

  get activeUrl(): string {
    return this._activeUrl;
  }

  private _items: MenuItem[] = [];

  @Input() set items(items: MenuItem[]) {
    this._items = items || [];
    this.addInitialActiveUrlIdIntoExpandedList();
  }

  get items(): MenuItem[] {
    return this._items;
  }

  formattedItems$ = new BehaviorSubject<MenuItem[]>([]);

  expandedItemIds = new Set<string>();

  addInitialActiveUrlIdIntoExpandedList() {
    getAllActiveIds(this.items, this.activeUrl).forEach(id => this.expandedItemIds.add(id));
    this.calculateFormattedMenuItems();
  }

  getFormattedMenuItems(): MenuItem[] {
    const menuItemMapper = (item: MenuItem) : MenuItem => {
      const active = isActive(item, this.activeUrl);

      return {
        ...item,
        url: item.url,
        isActive: active,
        expanded: this.expandedItemIds.has(item.id),
        items: item.items?.map(item => menuItemMapper(item)),
      };
    }
    return this.items.map<MenuItem>(menuItemMapper);
  }

  calculateFormattedMenuItems() {
    this.formattedItems$.next(this.getFormattedMenuItems());
  }

  onClick(clickedItem: MenuItem) {
    // Item should have some children items to be expanded/collapsed
    if (clickedItem.items?.length) {
      const isExpanded = this.expandedItemIds.has(clickedItem.id);

      if (isExpanded) {
        this.expandedItemIds.delete(clickedItem.id);
      }
      else {
        this.expandedItemIds.add(clickedItem.id);
      }

      this.calculateFormattedMenuItems()
    };
  }
}
