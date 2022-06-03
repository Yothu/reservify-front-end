import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Hotels from './pages/Hotels';
import Signup from './pages/signup/Signup';
import Reserve from './pages/reserve/Reserve';

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Hotels />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
