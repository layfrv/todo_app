import React from 'react';
import { CreateTaskForm } from './TaskForm/CreateTaskForm';
import logo from '../assets/img/logo.svg';
import { StatusBar } from './StatusBar/StatusBar';
import { TodoItem } from './TodoItem/TodoItem';
import emptyIcon from '../assets/img/emptyIcon.svg';

const data = [
  {
    id: 123,
    title: 'Create design for project',
    isCompleted: true,
  },
  {
    id: 124,
    title: 'Clean house',
    isCompleted: false,
  },
  {
    id: 125,
    title: 'Walk with dog',
    isCompleted: false,
  },
];

export const Home = () => {
  const [todos, setTodos] = React.useState(data);
  const [check, setCheck] = React.useState(false);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((todo) => todo.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((t) => t !== id));
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
  };

  const completedTodos = [...todos].filter((el) => el.isCompleted).length;
  const newTodos = [...todos].filter((el) => !el.isCompleted).length;

  return (
    <div>
      <header className="bg-[#0D0D0D] h-200 w-full">
        <img src={logo} className="py-11 ml-auto mr-auto" alt="logo"></img>
      </header>

      <main className="mx-auto w-max">
        <CreateTaskForm setTodos={setTodos} />
        <StatusBar newTodos={newTodos} completedTodos={completedTodos} />

        <div className="tasks h-80 overflow-y-scroll scrollbar-blue-700">
          {todos.length !== 0 ? (
            <ul>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  changeTodo={changeTodo}
                  deleteTodo={deleteTodo}
                />
              ))}
            </ul>
          ) : (
            <div>
              <img className="mx-auto pt-20" alt="empty" src={emptyIcon} />
              <h1 className="text-center text-zinc-600 pt-5 text-xl">Your task list is empty :(</h1>
            </div>
          )}
        </div>

        <div className="flex justify-between pt-5 pb-10">
          {completedTodos === 0 ? (
            <button className="hover:text-violet-600" onClick={checkAll}>
              Check all
            </button>
          ) : (
            <button className="hover:text-violet-600" onClick={unCheckAll}>
              Uncheck all
            </button>
          )}

          <button className="hover:text-violet-600" onClick={deleteAll}>
            Delete all
          </button>
        </div>
      </main>
    </div>
  );
};
