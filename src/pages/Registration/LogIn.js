import React from 'react';
import { useForm } from 'react-hook-form';

function LogIn() {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example'));
  console.log(watch('exampleRequired'));

  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Log In</h3>
        <div className="mb-3">
          <label htmlFor="temp-email">
            Email address
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="temp-email"
              {...register('example')}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="temp-password">
            Password
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="temp-password"
              {...register('exampleRequired', { required: true })}
            />
          </label>
        </div>
        {errors.exampleRequired && alert('hi')}
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <label className="custom-control-label" htmlFor="customCheck1">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot
          {' '}
          <a href="/">password?</a>
        </p>
      </form>
    </div>
  );
}

export default LogIn;
