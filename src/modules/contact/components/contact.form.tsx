import * as React from 'react';
import './contact';
import { IContact, ContactList } from '../contact.module';

export type IContactFormProps = {
  onAddContact: (IContact) => void;
}

export class ContactForm extends React.Component {

  props: IContactFormProps;

  submitHandle = (event) => {
    event.preventDefault();

    const contact: IContact = {
      email:    (this.refs.email as HTMLInputElement).value,
      username: (this.refs.username as HTMLInputElement).value,
      message:  (this.refs.message as HTMLInputElement).value,
    }
    
    this.props.onAddContact(contact);

    event.currentTarget.reset();
  }

  render() {
    return (<form onSubmit={this.submitHandle}>
      <p>
        <label htmlFor='username'>Username* : </label>
        <input type='text' ref='username' id='username' required />
      </p>

      <p>
        <label htmlFor='email'>Email* : </label>
        <input type='email' ref='email' id='email' required />
      </p>

      <p>
        <label htmlFor='message'>Message : </label>
        <input type='text' ref='message' id='message' />
      </p>

      <input type='submit' value='Send' />
    </form>);
  }
}