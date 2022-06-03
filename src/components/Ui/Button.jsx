import React from 'react';
import style from './Button.module.css';

function Button({ type, text, cName }) {
  return (
    <button className={`${style.button} ${cName}`} type={type}>
      {text}
    </button>
  );
}

export default Button;
