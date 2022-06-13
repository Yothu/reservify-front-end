import React from 'react';
import PropTypes from 'prop-types';
import style from './Select.module.css';

const Select = ({
  func, children, text, name,
}) => (
  <select onChange={func} className={style.select} defaultValue={text} name={name}>
    <option value={text} disabled>
      Select
      {text}
    </option>
    {children}
  </select>
);

Select.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
  func: PropTypes.func,
};

Select.defaultProps = {
  func: null,
  name: null,
};

export default Select;
