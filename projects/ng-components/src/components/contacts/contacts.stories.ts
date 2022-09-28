import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ContactsComponent } from './contacts.component';
import { ContactsModule } from './contacts.module';


export default {
  title: 'Sitemule-Ui/Contacts',
  component: ContactsComponent,
  parameters: {
  },
  decorators: [
    moduleMetadata({
      imports: [ContactsModule],
    }),
  ],
} as Meta;

const contacts = [
  {
    department: 'Sales',
    phone: '+45 70203010',
    email: 'sales@icecap.com'
},
{
  department: 'Support',
  phone: '+45 70203011',
  email: 'support@icecap.com'
},
{
  department: 'Developer',
  phone: '+45 70203012',
  email: 'dev@icecap.com'
},
{
  department: 'Corporate',
  address: 'System & Methode 8,\nHaandvaerksvinget,\n2970 Zealand \nDenmark',
  phone: '+45 70203010',
  email: 'info@system-methode.com'
},
];

const Template: Story<ContactsComponent> = (args:ContactsComponent) => ({
  component:ContactsComponent,
  props: args,
});

export const _contacts = Template.bind({});
_contacts.storyName = 'contacts';
_contacts.args = {
 contacts
};
