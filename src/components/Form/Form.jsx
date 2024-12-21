import { useDispatch } from 'react-redux';
import { addToDo } from '../../redux/operations.js';

export const Form = () => {
  const dispatch = useDispatch();
  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(addToDo(e.target.elements.text.value));
    e.target.reset();
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input name="text" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};
