import React, { useRef } from 'react';
import Button from './../Ui/Button';
import { useForm } from 'react-hook-form';
import ErrorMsg from './../Ui/ErrorMsg';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch('password');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="d-flex flex-column align-items-center gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="Username"
        className="form-control w-50"
        {...register('name', { required: 'Username is required' })}
      />
      {errors.name && <ErrorMsg message={errors.name.message} cName="w-50" />}
      <input
        type="text"
        placeholder="Email"
        className="form-control w-50"
        {...register('email', { required: 'Email is Required' })}
      />
      {errors.email && <ErrorMsg message={errors.email.message} cName="w-50" />}
      <input
        type="password"
        placeholder="Password"
        className="form-control w-50"
        {...register('password', {
          required: 'Password is Required',
          minLength: { value: 6, message: 'Password is Too Short' },
        })}
      />
      {errors.password && (
        <ErrorMsg message={errors.password.message} cName="w-50" />
      )}
      <input
        type="password"
        placeholder="Confim Password"
        className="form-control w-50"
        {...register('confirm_password', {
          validate: (value) =>
            value === password.current || 'The passwords do not match',
        })}
      />
      {errors.confirm_password && (
        <ErrorMsg message={errors.confirm_password.message} cName="w-50" />
      )}
      <Button type="submit" text="Signup" cName="mt-3" />
    </form>
  );
};

export default SignupForm;
