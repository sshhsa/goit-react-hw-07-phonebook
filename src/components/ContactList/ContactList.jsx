import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';
import { selectVisibleContacts } from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const VisibleTasks = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {VisibleTasks.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
