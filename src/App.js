import './App.css';
import { Home, Routines } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
        <Route path="/routines" element={<Routines />} />
      </Routes>
    </Router>
  );
}

export default App;


