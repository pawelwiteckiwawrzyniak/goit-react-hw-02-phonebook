import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();

    const listOfContacts = this.state.contacts.map(contacts => contacts.name);

    if (listOfContacts.find(contact => contact === name)) {
      return alert(name + ' is already in your contacts!');
    }
    this.setState({
      contacts: [...this.state.contacts, { id, name, number }],
    });
  };

  handleFilter = event => {
    const filteredName = event.currentTarget.value;
    this.setState({ filter: filteredName.toLowerCase() });
  };

  handleDelete = event => {
    const id = event.currentTarget.id;
    const index = this.state.contacts.findIndex(contact => contact.id === id);
    const contacts = this.state.contacts;
    contacts.splice(index, 1);
    this.setState({ contacts: contacts });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit}></ContactForm>
        <h2>Contacts</h2>
        <ContactFilter handleFilter={this.handleFilter}></ContactFilter>
        <ContactList
          contacts={this.state.contacts}
          filterPhrase={this.state.filter}
          handleDelete={this.handleDelete}
        ></ContactList>
      </div>
    );
  }
}
