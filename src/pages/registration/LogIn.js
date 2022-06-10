import { toast } from 'react-toastify';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, reset } from '../../redux/auth/auth-slice';
import loginImg from '../../assets/images/undraw-svg/green-welcome.svg';
import ErrorMsg from '../../components/Ui/ErrorMsg';
import Button from '../../components/Ui/Button';

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // prettier-ignore
  const {
    user, isLoading, isSuccess, isError, message,
  } = useSelector(
    (state) => state.auth,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      toast.success('Successfully logged in');
      navigate('/main');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(userLogin(data));
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Oval color="#FBBC05" height={250} width={250} />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center pt-4 container">
      <div className="text-center mb-3">
        <img src={loginImg} alt="register" className="mw-100" width={400} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-100">
        <input
          type="email"
          className="form-control mb-4"
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
        {errors.email && <ErrorMsg message={errors.email?.message} />}

        <input
          type="password"
          className="form-control my-3"
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

        {errors.password && <ErrorMsg message={errors.password?.message} />}

        <Button type="submit" text="Login" cName="mt-3 w-100" />
      </form>
    </div>
  );
}

export default LogIn;
