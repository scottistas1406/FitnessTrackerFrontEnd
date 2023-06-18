import './App.css';
import { Home, Routines, Activities, Register,Login, CreateActivity } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
        <Route path="/routines" element={<Routines />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/activities" element={<CreateActivity/>} />
      </Routes>
    </Router>
  );
}

export default App;


