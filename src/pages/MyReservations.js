import { DateTime } from 'luxon';

const MyReservations = () => {
  const currentTime = DateTime.now().toLocaleString();
  console.log(currentTime);
  
  return (
    <div className="text-center">
      <h1>My Reservations</h1>
    </div>
  );
};

export default MyReservations;
