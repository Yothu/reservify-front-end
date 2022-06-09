import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DeleteHotel from './pages/admin/deleteHotel/DeleteHotel';
import SplashScreen from './pages/registration/SplashScreen';
import Signup from './pages/registration/signup/Signup';
import AddHotel from './pages/admin/addHotel/AddHotel';
import Sidebar from './components/Sidebar/Sidebar';
import LogIn from './pages/registration/LogIn';
import Reserve from './pages/reserve/Reserve';
import Hotels from './pages/Hotels';
import HotelDetails from './pages/HotelDetails';
import Main from './pages/main/Main';
import MyReservations from './pages/MyReservations';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';

function App() {
  const hotels = [
    {
      id: '1',
      name: 'Hilton',
      image_url: 'https://drive.google.com/uc?export=view&id=1bYXrlSNGpLJF9TlY-2mRBphA0zVpz93w',
      address: 'Street 1, Avenue 1',
      city: 'New York',
      country: 'USA',
      room_price: 152.5,
      amenities: {
        pet_friendly: true,
        free_wifi: true,
        public_pool: true,
        smoke_free: true,
        valet_parking: true,
        ocean_view: true,
      },
      number_of_rooms: 10,
      stars: 5,
      current_free_rooms: 10,
    },
    {
      id: '2',
      name: 'Sheraton',
      image_url: 'https://drive.google.com/uc?export=view&id=1oG8F5q80t9HmKkS6iWfUG28Mmo8oFmsZ',
      address: 'Street 2, Avenue 2',
      city: 'California',
      country: 'India',
      room_price: 265.5,
      amenities: {
        pet_friendly: false,
        free_wifi: true,
        public_pool: true,
        smoke_free: false,
        valet_parking: true,
        ocean_view: true,
      },
      number_of_rooms: 25,
      stars: 4,
      current_free_rooms: 25,
    },
  ];
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main className="page">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/hotels" element={<Hotels hotels={hotels} />} />
          <Route path="/hotels/:id" element={<HotelDetails hotels={hotels} />} />
          <Route path="/my_reservations" element={<MyReservations />} />
          <Route path="/add_hotel" element={<AddHotel />} />
          <Route path="/delete_hotel" element={<DeleteHotel />} />
        </Routes>
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
