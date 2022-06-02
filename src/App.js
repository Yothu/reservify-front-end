import './App.css';
import { Routes, Route } from 'react-router-dom';
import Hotels from './components/Hotels';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hotels />} />
      </Routes>
    </div>
  );
}

export default App;
