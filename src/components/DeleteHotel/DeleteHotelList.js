import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import hotelService from '../../redux/hotels/hotel-services';
import DeleteHotelListRow from './DeleteHotelListRow';
import style from './DeleteHotelList.module.css';

const DeleteHotelList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hotelService.getHotels());
  }, [dispatch]);

  const hotels = useSelector((state) => state.hotel.hotels);

  return (
    <table className={style['delete-table']}>
      <thead>
        <tr className="fs-5">
          <th>Hotel Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {hotels.map((hotel) => (
          <DeleteHotelListRow key={hotel.id} id={hotel.id} name={hotel.name} />
        ))}
      </tbody>
    </table>
  );
};

export default DeleteHotelList;
