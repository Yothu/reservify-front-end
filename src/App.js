import { Routes, Route } from 'react-router-dom';
import Hotels from './pages/Hotels';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <header>
        <Sidebar />
      </header>
      <Routes>
        <Route path="/" element={<Hotels />} />
      </Routes>
    </div>
  );
}

export default App;
