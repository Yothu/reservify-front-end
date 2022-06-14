import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from '../Ui/Button';
import ErrorMsg from '../Ui/ErrorMsg';
import hotelService from '../../redux/hotels/hotel-services';

const AddHotelForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await hotelService.addHotelToAPI(data);
    if (response.status === 201) {
      const { message } = response.data;
      toast.success(message);
    } else {
      toast.error('Something went wrong');
    }
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
      <textarea
        placeholder="Description"
        className="form-control w-75"
        {...register('description', { required: 'Description is required' })}
      />
      {errors.description && (
        <ErrorMsg message={errors.description.message} cName="w-75" />
      )}
      <div className="d-flex gap-2 w-75">
        <input
          type="text"
          placeholder="Country"
          className="form-control flex-grow-1"
          {...register('country', { required: 'Country is Required' })}
        />
        {errors.country && (
          <ErrorMsg message={errors.country.message} cName="w-75" />
        )}
        <input
          type="text"
          placeholder="City"
          className="form-control flex-grow-1"
          {...register('city', { required: 'City is Required' })}
        />
        {errors.country && (
          <ErrorMsg message={errors.country.message} cName="w-75" />
        )}
        <input
          type="text"
          placeholder="Address"
          className="form-control flex-grow-1"
          {...register('address', { required: 'Address is Required' })}
        />
        {errors.address && (
          <ErrorMsg message={errors.address.message} cName="w-75" />
        )}
      </div>
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Stars quantity (1~5)"
        className="form-control w-75"
        {...register('stars', {
          required: 'You must set stars for the new hotel',
        })}
      />
      {errors.stars && <ErrorMsg message={errors.stars.message} cName="w-75" />}
      <input
        type="number"
        min="1"
        placeholder="Room quantity"
        className="form-control w-75"
        {...register('number_of_rooms', {
          required: 'Room quantity is required',
        })}
      />
      {errors.rooms && <ErrorMsg message={errors.rooms.message} cName="w-75" />}
      <input
        type="number"
        step="0.01"
        placeholder="Price of a room"
        min="1"
        className="form-control w-75"
        {...register('room_price', { required: 'Room price is required' })}
      />
      {errors.price && <ErrorMsg message={errors.price.message} cName="w-75" />}
      <div className="amenities-container d-flex justify-content-between w-75">
        <label htmlFor="pet-friendly">
          Pet Friendly
          <input type="checkbox" {...register('pet_friendly')} />
        </label>
        <label htmlFor="wifi">
          Wifi
          <input type="checkbox" {...register('wifi')} />
        </label>
        <label htmlFor="air-conditioning">
          Air Conditioning
          <input type="checkbox" {...register('air_conditioning')} />
        </label>
        <label htmlFor="public-pool">
          Public Pool
          <input type="checkbox" {...register('public_pool')} />
        </label>
      </div>
      <label htmlFor="image-url">
        Image URL
        <input type="text" {...register('image_url')} />
      </label>
      <Button type="submit" text="Add Hotel" cName="mt-3" />
    </form>
  );
};

export default AddHotelForm;
