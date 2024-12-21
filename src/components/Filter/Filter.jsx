import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const hendleChange = e => {
    dispatch(setFilter(e.target.value));
    console.log(e.target.value);
  };
  return <input onChange={hendleChange} type="text" />;
};
