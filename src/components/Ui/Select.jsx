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
  func: PropTypes.func,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Select.defaultProps = {
  func: null,
};

export default Select;
