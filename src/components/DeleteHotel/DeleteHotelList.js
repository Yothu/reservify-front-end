import { useSelector } from 'react-redux';
import DeleteHotelListRow from './DeleteHotelListRow';
import style from './DeleteHotelList.module.css';

const DeleteHotelList = () => {
  const hotels = useSelector((state) => state.hotel.hotels);
  return (
    <table className={style['delete-table']}>
      <thead>
        <tr>
          <th>Hotel Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          hotels.map((hotel) => (
            <DeleteHotelListRow key={hotel.id} id={hotel.id} name={hotel.name} />
          ))
        }
      </tbody>
    </table>
  );
};

export default DeleteHotelList;
