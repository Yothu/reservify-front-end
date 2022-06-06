import { Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/registration/SplashScreen';
import Signup from './pages/registration/signup/Signup';
import Sidebar from './components/Sidebar/Sidebar';
import LogIn from './pages/registration/LogIn';
import Reserve from './pages/reserve/Reserve';

import Hotels from './pages/Hotels';
import HotelDetails from './pages/HotelDetails';

import './App.css';

function App() {
  const hotels = [
    {
      id: '1', name: 'Hilton',
    },
    {
      id: '2', name: 'Sheraton',
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/reserve" element={<Reserve />} />

          <Route path="/hotels" element={<Hotels hotels={hotels} />} />
          <Route path="/hotels/:id" element={<HotelDetails hotels={hotels} />} />

        </Routes>
      </main>
    </>
  );
}

export default App;
