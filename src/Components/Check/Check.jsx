import { BsCheck } from 'react-icons/bs';
import React from 'react';
import cn from 'classnames';

export const Check = ({ isCompleted }) => {
  return (
    <div
      className={cn('border-2 rounded-md border-violet-600 w-8 h-8 mr-5', {
        'bg-violet-600': isCompleted,
      })}>
      {isCompleted ? <BsCheck fill="#f2ebff" size={26} className="mx-auto my-auto" /> : ''}
    </div>
  );
};
