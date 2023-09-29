import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import Form from './Components/Form/Form';
import Button from './Components/Button/Button';
import Checklist from './Components/Checklist/Checklist';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './app/Slices/checklistSlice'; 


function App() {
  const tasks = useSelector(store => store.checklistReducer);
  const dispatch = useDispatch();
  return (
    <>
      <Form onSubmit={(taskData) => dispatch(addTask(taskData))}></Form>
      <Button>All</Button>
      <Button>Done</Button>
      <Button>Remainded</Button>
      <Checklist tasks={tasks} dispatch={dispatch}/>
    </>
  );
}

export default App;
