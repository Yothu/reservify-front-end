import { useForm } from 'react-hook-form';
import Button from '../Ui/Button';
import ErrorMsg from '../Ui/ErrorMsg';

const AddHotelForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        placeholder="Name"
        className="form-control w-75"
        {...register('name', { required: 'Hotel name is required' })}
      />
      {errors.name && <ErrorMsg message={errors.name.message} cName="w-75" />}
      <input
        type="text"
        placeholder="Country"
        className="form-control w-75"
        {...register('country', { required: 'Country is Required' })}
      />
      {errors.country && <ErrorMsg message={errors.country.message} cName="w-75" />}
      <input
        type="text"
        placeholder="City"
        className="form-control w-75"
        {...register('city', { required: 'City is Required' })}
      />
      {errors.country && <ErrorMsg message={errors.country.message} cName="w-75" />}
      <input
        type="text"
        placeholder="Street"
        className="form-control w-75"
        {...register('street', { required: 'Street is Required' })}
      />
      {errors.street && <ErrorMsg message={errors.street.message} cName="w-75" />}
      <input
        type="password"
        placeholder="Password"
        className="form-control w-75"
        {...register('password', {
          required: 'Password is Required',
          minLength: { value: 6, message: 'Password is Too Short' },
        })}
      />
      {errors.password && (
        <ErrorMsg message={errors.password.message} cName="w-75" />
      )}
      <Button type="submit" text="Signup" cName="mt-3" />
    </form>
  );
};

export default AddHotelForm;
