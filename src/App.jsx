import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToDos } from './redux/operations.js';
import { ToDoList } from './components/ToDoList/ToDoList.jsx';
import { Form } from './components/Form/Form.jsx';
import { selectIsLoading } from './redux/selectors.js';
import { Loader } from './components/Loader/Loader.jsx';
import { Filter } from './components/Filter/Filter.jsx';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchToDos());
  }, []);

  const numbers = [1, 1, 2, 2, 3, 3];

  const filteredArr = numbers.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
  console.log(filteredArr);
  return (
    <>
      <Form />
      <Filter />
      <ToDoList />
      {loading && <Loader />}
    </>
  );
}

export default App;
