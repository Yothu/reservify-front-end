import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/counter/counter-slice';

function Hotels() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  const increase = () => {
    dispatch(increment(5));
  };

  return (
    <div className="text-center">
      Hotels :
      {value}
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default Hotels;
