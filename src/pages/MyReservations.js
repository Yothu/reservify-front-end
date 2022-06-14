import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import reservationService from '../redux/reservations/reservation-services';
import 'react-confirm-alert/src/react-confirm-alert.css';

const MyReservations = () => {
  const isLoggedIn = localStorage.getItem('USER') || false;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation.reservations);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
    dispatch(reservationService.fetchReservations());
  }, [dispatch, isLoggedIn, navigate]);

  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to cancel this reservation.',
      buttons: [
        {
          label: 'Confirm',
          onClick: () => {
            dispatch(reservationService.cancelReservation(id));
          },
        },
        {
          label: 'Cancel',
          onClick: () => null,
        },
      ],
    });
  };

  return (
    <>
      <h1 className="text-center mt-5">My Reservations</h1>
      <div className="d-flex flex-column">
        <table className="table table-bordered table-hover">
          <caption>All your reservations</caption>
          <thead className="table-dark">
            <tr>
              <th scope="col">Hotel Name</th>
              <th scope="col">Price</th>
              <th scope="col" className="d-none d-sm-block">
                Stars
              </th>
              <th scope="col">Created at</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr key={r.reservation.id}>
                <td>{r.hotel.name}</td>
                <td className="d-none d-sm-table-cell">{r.hotel.room_price}</td>
                <td>{r.hotel.stars}</td>
                <td>{new Date(r.reservation.created_at).toLocaleString()}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(r.reservation.id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyReservations;
