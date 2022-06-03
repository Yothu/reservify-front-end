import React from 'react';
import style from './Select.module.css';

const Select = ({ children }) => {
  return <select className={style.select}>{children}</select>;
};

export default Select;
