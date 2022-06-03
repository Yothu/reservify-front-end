import React from 'react';
import Button from './../Ui/Button';

const SignupForm = () => {
  return (
    <form className="d-flex flex-column align-items-center gap-2">
      <input type="text" placeholder="Username" className="form-control w-75" />
      <input type="text" placeholder="Email" className="form-control w-75" />
      <input type="text" placeholder="Password" className="form-control w-75" />
      <input
        type="text"
        placeholder="Confim Password"
        className="form-control w-75"
      />
      <Button type="submit" text="Signup" cName="mt-3" />
    </form>
  );
};

export default SignupForm;
