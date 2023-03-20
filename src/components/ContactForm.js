import PropTypes from 'prop-types'
import css from './App.module.css'
import { useState } from "react";

export const ContactForm = ({ onFormSubmit }) => {
    const [Name, setName] = useState('');
    const [Number, setNumber] = useState('');

    const handleNameChange = evt => {
        // this.setState({ name: evt.target.value });
        setName(evt.target.value);
    };
    const handleNumChange = evt => {
        // this.setState({ number: evt.target.value });
        setNumber(evt.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(e)
        // this.setState({ name: '', number: '' })
        setName('');
        setNumber('');
    }

    return (
        <form onSubmit={handleOnSubmit} >
            <fieldset className={(css.formEl)}>
                <label htmlFor="contactName" className={(css.formLabel)}>Name</label>
                <input
                    className={(css.formInput)}
                    type="text"
                    name="name"
                    id="contactName"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={Name}
                    onChange={handleNameChange}
                />
                <label htmlFor="contactNumber" className={(css.formLabel)}>Number</label>
                <input
                    className={(css.formInput)}
                    type="tel"
                    name="number"
                    id="contactNumber"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={Number}
                    onChange={handleNumChange}
                />
                <button type="submit" className={(css.formSubmit)}>Add Contact</button>
            </fieldset>
        </ form >

    )
}


ContactForm.propTypes = {
    Name: PropTypes.string,
    Number: PropTypes.string
};
