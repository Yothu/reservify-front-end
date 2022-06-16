import PropTypes from 'prop-types';
import hotelService from '../../redux/hotels/hotel-services';

const DeleteHotelListRow = ({ id, name }) => {
  const removeHotel = async () => {
    await hotelService.deleteHotelFromAPI(id);
  };

  return (
    <tr className="border border-top-1 fs-6">
      <th>{name}</th>
      <th>
        <button className="btn btn-outline-danger" onClick={removeHotel}>
          Delete
        </button>
      </th>
    </tr>
  );
};

DeleteHotelListRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default DeleteHotelListRow;
