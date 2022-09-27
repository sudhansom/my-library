import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IContact } from './contacts.stories';


@Component({
  selector: 'sm-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
 @Input() contacts: IContact [] = [];
 @Input() backgroundColor: string = '#fff';
}
