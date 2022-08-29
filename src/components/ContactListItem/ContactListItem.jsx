import PropTypes from 'prop-types';
import { Button } from 'utilities/button.styled';
import { ListItem } from 'components/ContactLsit/ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ContactSlice';

export function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  const removeContact = () => dispatch(deleteContact(id));

  return (
    <ListItem>
      {name}: {number}
      <Button type="button" onClick={removeContact}>
        Delete
      </Button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
};
