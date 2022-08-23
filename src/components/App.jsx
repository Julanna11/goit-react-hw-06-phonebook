import { Form } from './ContactForm/ConstactForm';
import ContactList from './ContactLsit/ContactList';
import { Filter } from './Filter/Filter';
import Section from './Section/Section';
import { Container } from './Container.styled';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/ContactSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getFilter,
  deleteContact,
  changeFilter,
} from 'redux/ContactSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const formSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.some(e => e.name.toLowerCase() === contact.name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(contact));
  };

  const removeContact = id => dispatch(deleteContact(id));

  const setFilterContact = event =>
    dispatch(changeFilter(event.currentTarget.value));

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler}></Form>
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onFilter={setFilterContact} />

        <ContactList
          contacts={getFilteredContacts()}
          removeItem={removeContact}
        />
      </Section>
    </Container>
  );
};
