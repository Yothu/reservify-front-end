import { Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/registration/SplashScreen';
import Signup from './pages/registration/signup/Signup';
import AddHotel from './pages/admin/addHotel/addHotel';
import Sidebar from './components/Sidebar/Sidebar';
import LogIn from './pages/registration/LogIn';
import Reserve from './pages/reserve/Reserve';
import './App.css';

function App() {
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
          <Route path="/add_hotel" element={<AddHotel />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
