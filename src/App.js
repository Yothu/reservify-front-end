import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Hotels from './pages/Hotels';
import Signup from './pages/signup/Signup';

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
        </Routes>
      </main>
    </>
  );
}

export default App;
