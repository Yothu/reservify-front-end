import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Signup from './pages/registration/signup/Signup';
import Reserve from './pages/reserve/Reserve';
import SplashScreen from './pages/registration/SplashScreen';
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
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
