import React, { useRef, useEffect } from 'react';

export const Input = ({ title, setTitle, onKeyDownHandler, onBlur }) => {
  return (
    <input
      autoFocus
      onBlur={onBlur}
      className="edit-input"
      type="text"
      value={title}
      onKeyDown={onKeyDownHandler}
      onChange={(e) => setTitle(e.target.value)}
      autoComplete="off"></input>
  );
};
