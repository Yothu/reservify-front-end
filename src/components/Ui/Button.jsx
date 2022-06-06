import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

function Button({ type, text, cName }) {
  return (
    <button className={`${style.button} ${cName}`} type={type}>
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cName: PropTypes.string.isRequired,
};

export default Button;
