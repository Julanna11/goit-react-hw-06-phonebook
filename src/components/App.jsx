import { Form } from './ContactForm/ConstactForm';
import ContactList from './ContactLsit/ContactList';
import { Filter } from './Filter/Filter';
import Section from './Section/Section';
import { Container } from './Container.styled';

export const App = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />

        <ContactList />
      </Section>
    </Container>
  );
};
