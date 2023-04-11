import React from 'react';
import './styles.scss';

export const StatusBar = ({ newTodos, completedTodos }) => {
  return (
    <div className="status">
      <div className="element">
        <p>New tasks</p>
        <div className="circle">
          <p>{newTodos}</p>
        </div>
      </div>

      <div className="element">
        <p>Completed tasks</p>
        <div className="circle">
          <p>{completedTodos}</p>
        </div>
      </div>
    </div>
  );
};
