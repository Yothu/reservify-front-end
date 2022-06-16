import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Button from '../Ui/Button';
import ErrorMsg from '../Ui/ErrorMsg';
import { userRegister, reset } from '../../redux/auth/auth-slice';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch('password');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // prettier-ignore
  const {
    user,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      toast.success('Successfully registered');
      navigate('/login');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (data) => {
    dispatch(userRegister(data));
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Oval color="#FBBC05" height={250} width={250} />
      </div>
    );
  }

  return (
    <form
      className="d-flex flex-column align-items-center gap-2 container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="Username"
        className="form-control"
        {...register('username', { required: 'Username is required' })}
      />
      {errors.username && <ErrorMsg message={errors.username.message} />}
      <input
        type="text"
        placeholder="Email"
        className="form-control"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid email address',
          },
        })}
      />
      {errors.email && <ErrorMsg message={errors.email.message} />}
      <input
        type="password"
        placeholder="Password"
        className="form-control"
        {...register('password', {
          required: 'Password is Required',
          minLength: { value: 6, message: 'Password is Too Short' },
        })}
      />
      {errors.password && <ErrorMsg message={errors.password.message} />}
      <input
        type="password"
        placeholder="Confim Password"
        className="form-control"
        {...register('confirm_password', {
          validate: (value) => {
            if (value === password.current) return null;
            return 'The passwords do not match';
          },
        })}
      />
      {errors.confirm_password && (
        <ErrorMsg message={errors.confirm_password.message} />
      )}
      <Button type="submit" text="Signup" cName="mt-3" />
    </form>
  );
};

export default SignupForm;
