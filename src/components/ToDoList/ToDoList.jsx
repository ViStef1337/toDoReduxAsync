import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredToDos } from '../../redux/selectors.js';
import { deleteToDo } from '../../redux/operations.js';

export const ToDoList = () => {
  const toDos = useSelector(selectFilteredToDos);
  const dispatch = useDispatch();

  const hendleDelete = id => {
    dispatch(deleteToDo(id));
  };
  return (
    <ul>
      {toDos.map(item => {
        return (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={() => hendleDelete(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
