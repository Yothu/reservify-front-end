import { DateTime } from 'luxon';

const MyReservations = () => {
  const reservations = [
    {
      id: '1',
      name: 'Best Western',
      price: 252.5,
      stars: 4,
      start_date: DateTime.local(2022, 6, 10, 17, 36),
      end_date: DateTime.local(2022, 6, 15, 17, 36),
    },
    {
      id: '2',
      name: 'Wyndham',
      price: 641.2,
      stars: 5,
      start_date: DateTime.local(2022, 7, 15, 17, 36),
      end_date: DateTime.local(2022, 7, 21, 17, 36),
    },
  ];

  reservations.forEach((reservation) => {
    reservation.duration = reservation.end_date.diff(reservation.start_date, ['years', 'months', 'days', 'hours']).days;
  });

  return (
    <>
      <h1 className="text-center mt-5">My Reservations</h1>
      <div className="d-flex flex-column">
        <table className="table">
          <caption>All your reservations</caption>
          <thead className="">
            <tr>
              <th scope="col">Hotel Name</th>
              <th scope="col">Price</th>
              <th scope="col" className="d-none d-sm-block">Stars</th>
              <th scope="col">Check-in</th>
              <th scope="col" className="d-none d-sm-block">Check-out</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.name}</td>
                <td>
                  $
                  {reservation.price}
                </td>
                <td className="d-none d-sm-block">{reservation.stars}</td>
                <td>{reservation.start_date.toLocaleString()}</td>
                <td className="d-none d-sm-block">{reservation.end_date.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
};

export default MyReservations;
