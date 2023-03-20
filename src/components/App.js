import PropTypes from 'prop-types'
import nextId from "react-id-generator";
import { ContactList } from './ContactList'
import { Filter } from "./Filter";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { ContactForm } from "./ContactForm";
import css from './App.module.css'
import { useEffect, useState } from "react";

export const App = () => {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')));

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const addContact = (evt) => {
    evt.preventDefault();

    const newContact = {
      name: evt.target.elements.name.value,
      id: nextId(),
      number: evt.target.elements.number.value,
    }

    const findSame = contacts.find(contact => contact.name === evt.target.elements.name.value)

    if (findSame) {
      return Report.failure('You have already added this contact')
    }

    setContacts([...contacts, newContact])
  }
  const changeFilter = evt =>
    setFilter(evt.currentTarget.value)

  const removeContact = (id) => {

    setContacts(contacts.filter(item => item.id !== id))

  }

  const loweredFilter = filter.toLocaleLowerCase();
  const filteredContacts =
    contacts.filter(contact => contact.name.toLocaleLowerCase().includes(loweredFilter))

  return (
    <div className={(css.appWrap)}>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onFiltChange={changeFilter} value={filter} />
      <ContactList contacts={filteredContacts} removeContact={removeContact} />
    </div >
  )
}

App.propTypes = {
  Contacts: PropTypes.array,
  Filter: PropTypes.string
};