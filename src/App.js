import { Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/registration/SplashScreen';
import Signup from './pages/registration/signup/Signup';
import Sidebar from './components/Sidebar/Sidebar';
import Reserve from './pages/reserve/Reserve';
import Main from './pages/main/Main';
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
          <Route path="/main" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
