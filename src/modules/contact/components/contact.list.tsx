import * as React from 'react';
import { IContact } from '../contact.module';

export function ContactList(props) {
  return (
    <ul>
      {props.contactList.map((contact: IContact, index: number) => (
        <li key={index}>
          <div>{contact.username}</div>
          <div>{contact.email}</div>
          <div>{contact.message}</div>
        </li>
      ))}
    </ul>
  );
} 