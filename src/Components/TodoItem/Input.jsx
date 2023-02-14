import React from 'react';

export const Input = ({ title, setTitle, onKeyDownHandler }) => {
  return (
    <input
      className='edit-input'
      type='text'
      value={title}
      onKeyDown={onKeyDownHandler}
      onChange={(e) => setTitle(e.target.value)}
      autoComplete='off'></input>
  );
};
