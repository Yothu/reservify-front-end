import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Signup from './pages/signup/Signup';
import LogIn from './pages/Registration/LogIn';
import SplashScreen from './pages/Registration/SplashScreen';

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
