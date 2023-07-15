import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

import { Button } from 'components/Button/Button';
import css from './ContactForm.module.css';

export function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (
      form.elements.name.value.trim() !== '' &&
      form.elements.number.value.trim().toString() !== ''
    ) {
      dispatch(
        addContact(
          form.elements.name.value.trim(),
          form.elements.number.value.trim()
        )
      );
      form.reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="name"
        name="name"
        placeholder="Contact name"
        autoComplete="off"
      />
      <input
        className={css.field}
        type="number"
        name="number"
        placeholder="Contact number"
        autoComplete="off"
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
}
