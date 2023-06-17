import './App.css';
import {Home, Routines} from './components'
import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
//add all routes here
    Home() ,
    Routines()
  );
}

<BrowserRouter>
<Route exact path="/routines" element={<routines />} /> 
</BrowserRouter>

export default App;
