import React from 'react';

function ErrorMsg({ message, cName }) {
  return (
    <span className={`alert alert-danger ${cName}`} role="alert">
      {message}
    </span>
  );
}

export default ErrorMsg;
