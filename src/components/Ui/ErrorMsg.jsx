import React from 'react';
import PropTypes from 'prop-types';

function ErrorMsg({ message, cName }) {
  return (
    <span className={`alert alert-danger ${cName} w-100`} role="alert">
      {message}
    </span>
  );
}

ErrorMsg.propTypes = {
  message: PropTypes.string.isRequired,
  cName: PropTypes.string.isRequired,
};

export default ErrorMsg;
