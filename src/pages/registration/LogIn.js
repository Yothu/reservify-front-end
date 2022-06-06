import React from 'react';
import { useForm } from 'react-hook-form';

function LogIn() {
  const {
    register, handleSubmit, formState: { errors },
    // watch,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Log In</h3>
        <div className="mb-3">
          <label htmlFor="email">
            Email address
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              })}
            />
          </label>
          <p>{errors.email?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            Password
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Min length is 6',
                },
              })}
            />
          </label>
          <p>{errors.password?.message}</p>
        </div>
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
