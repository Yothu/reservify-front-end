import React from 'react';
import PropTypes from 'prop-types';
import style from './Select.module.css';

const Select = ({ children }) => (
  <select className={style.select}>{children}</select>
);

Select.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Select;
