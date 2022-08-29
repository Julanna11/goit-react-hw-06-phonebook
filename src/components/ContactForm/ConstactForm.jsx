import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Input } from './ContactForm.styled';
import { Button } from 'utilities/button.styled';
import { addContact } from 'redux/ContactSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/ContactSlice';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const changeName = evt => setName(evt.target.value);
  const changeNumber = evt => setNumber(evt.target.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.some(e => e.name.toLowerCase() === contact.name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Input
        id={nanoid()}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={changeName}
        required
      />
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={changeNumber}
        required
      />
      <Button type="submit">Add Contact</Button>
    </form>
  );
};
