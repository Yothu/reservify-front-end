import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteHotel } from '../../redux/hotels/hotel-slice';

const DeleteHotelListRow = ({ id, name }) => {
  const dispatch = useDispatch();

  const removeHotel = () => {
    dispatch(deleteHotel({ id }));
  };

  return (
    <tr className="border border-top-1">
      <th>{name}</th>
      <th>
        <button onClick={removeHotel}>Delete</button>
      </th>
    </tr>
  );
};

DeleteHotelListRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default DeleteHotelListRow;
