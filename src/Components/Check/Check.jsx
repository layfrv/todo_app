import { BsCheck } from 'react-icons/bs';
import React from 'react';
import './check.modules.scss';
import cn from 'classnames';

export const Check = ({ isCompleted }) => {
  return (
    <div
      className={cn('check', {
        bg: isCompleted,
      })}>
      {isCompleted ? <BsCheck className="check-icon" /> : ''}
    </div>
  );
};
