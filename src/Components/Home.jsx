import React from 'react';
import { CreateTaskForm } from './TaskForm/CreateTaskForm';
import logo from '../assets/img/logo.svg';
import { StatusBar } from './StatusBar/StatusBar';
import { TodoList } from './TodoList';
import emptyIcon from '../assets/img/emptyIcon.svg';
import '../App.scss';

export const Home = () => {
  const saved = () => (localStorage.length !== 0 ? JSON.parse(localStorage.getItem('todos')) : []);

  const [todos, setTodos] = React.useState(saved);
  const [check, setCheck] = React.useState(false);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((todo) => todo.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((t) => t !== id));
    localStorage.removeItem(id);
  };

  const checkAll = () => {
    const copy = todos.map((el) => ({ ...el, isCompleted: true }));
    setTodos(copy);
    setCheck((prev) => !prev);
  };

  const unCheckAll = () => {
    const copy = todos.map((el) => ({ ...el, isCompleted: false }));
    setTodos(copy);
    setCheck((prev) => !prev);
  };

  const deleteAll = () => {
    setTodos([]);
    localStorage.clear();
  };

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const completedTodos = [...todos].filter((el) => el.isCompleted).length;
  const newTodos = [...todos].filter((el) => !el.isCompleted).length;

  // console.log(todos);

  return (
    <div>
      <header>
        <img src={logo} alt='logo'></img>
      </header>

      <main>
        <CreateTaskForm todos={todos} setTodos={setTodos} />
        <StatusBar newTodos={newTodos} completedTodos={completedTodos} />
        <div className='todos-container'>
          {todos.length !== 0 ? (
            <TodoList
              todos={todos}
              setTodos={setTodos}
              changeTodo={changeTodo}
              deleteTodo={deleteTodo}
            />
          ) : (
            <div className='empty-list'>
              <img className='empty-list-img' alt='empty' src={emptyIcon} />
              <h1 className='empty-list-text'>Your task list is empty :(</h1>
            </div>
          )}
        </div>

        <div className='bottom-buttons'>
          {completedTodos === 0 ? (
            <button className='bottom-buttons-btn' onClick={checkAll}>
              <p>Check all</p>
            </button>
          ) : (
            <button className='bottom-buttons-btn' onClick={unCheckAll}>
              <p>Uncheck all</p>
            </button>
          )}

          <button className='bottom-buttons-btn' onClick={deleteAll}>
            <p>Delete all</p>
          </button>
        </div>
      </main>
    </div>
  );
};
