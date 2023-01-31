import React from 'react';
import './statusBar.modules.scss';

export const StatusBar = ({ newTodos, completedTodos }) => {
  return (
    <div className="status-bar">
      <div className="status_bar-element">
        <p>New tasks</p>
        <span className="status_bar-element-circle">
          <p>{newTodos}</p>
        </span>
      </div>

      <div className="status_bar-element">
        <p>Completed tasks</p>
        <div className="status_bar-element-circle">
          <p>{completedTodos}</p>
        </div>
      </div>
    </div>
  );
};
