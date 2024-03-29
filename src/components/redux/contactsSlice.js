import { createSlice } from '@reduxjs/toolkit'

const initialState = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        addContactToStore: (state, action) => {
            state.push(action.payload)
        },
        deleteContact: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload);
            state.splice(index, 1);
        },
        filterContacts: (state, action) => {
            return state.filter(contact => contact.name.toLocaleLowerCase().includes(action.payload))
        }
    },
})

export const { addContactToStore, deleteContact, filterContacts } = contactsSlice.actions

export default contactsSlice.reducer
