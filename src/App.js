import { Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/registration/SplashScreen';
import Signup from './pages/registration/signup/Signup';
import Sidebar from './components/Sidebar/Sidebar';
import Signup from './pages/signup/Signup';
import LogIn from './pages/Registration/LogIn';
import SplashScreen from './pages/Registration/SplashScreen';
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
        </Routes>
      </main>
    </>
  );
}

export default App;
