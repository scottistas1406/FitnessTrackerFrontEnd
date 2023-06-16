import './App.css';
import {home} from './components'
import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    home()
  );
}

export default App;
