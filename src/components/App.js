import PropTypes from 'prop-types'
import { ContactList } from './ContactList'
import { Filter } from "./Filter";
import { ContactForm } from "./ContactForm";
import css from './App.module.css'
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector((state) => state.contacts)
  const FilterVal = useSelector((state) => state.filter)

  const loweredFilter = FilterVal.toLocaleLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(loweredFilter))

  return (
    <div className={(css.appWrap)}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList filteredContacts={filteredContacts} />
    </div >
  )
}

App.propTypes = {
  Contacts: PropTypes.array,
  Filter: PropTypes.string
};