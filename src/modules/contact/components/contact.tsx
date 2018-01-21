import * as React from 'react';
import { ContactForm, ContactList, ContactService } from '../contact.module';
import './contact';

export type IContact = {
  email: string;
  username: string;
  message: string;
}

export type IContactState = {
  contacts: IContact[]
}

export class Contact extends React.Component {

  static initialState = (): IContactState => ({
    contacts: ContactService.contactList
  });

  state:IContactState = Contact.initialState();

  onAddContact = (contact: IContact) => {
      this.setState((prevState: IContactState) => ({
        contacts: [...prevState.contacts, contact]
      }), () => {
        ContactService.contactList = this.state.contacts;
      });
  }

  render() {
    return (<div>
      <ContactForm onAddContact={this.onAddContact} />
      <ContactList contactList={this.state.contacts} />
    </div>);
  }
}