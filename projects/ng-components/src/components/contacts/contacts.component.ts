import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface IContact {
  department: string
  address?: string
  phone: string
  email: string
}

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
