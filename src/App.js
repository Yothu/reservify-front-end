import { Routes, Route } from 'react-router-dom';
import Hotels from './pages/Hotels';
import LogIn from './pages/Registration/LogIn';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hotels />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
