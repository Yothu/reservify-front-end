import { Routes, Route } from 'react-router-dom';
import Hotels from './pages/Hotels';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hotels />} />
      </Routes>
    </div>
  );
}

export default App;
