import nextId from "react-id-generator";
import css from './App.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from "./redux/contactsSlice";

export const ContactList = ({ filteredContacts }) => {

    const contacts = useSelector((state) => state.contacts)
    const dispatch = useDispatch();

    return (<ul className={(css.contactList)}>{filteredContacts.map
        (contact =>
            <li key={nextId()}>{contact.name} : {contact.number}
                <button onClick={() => { dispatch(deleteContact(contact.id)) }} className={(css.contactListBtn)}>Delete</button>
            </li>)}
    </ul>
    )
}