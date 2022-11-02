import React from "react";
import {Routes, Route} from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";


function App() {
  return (<div>
  <NavBar>
  <Routes>
  <Route exact path='/'>
  <Home />
  </Route>
  <Route path='/about'>
    <About />
  </Route>
  <Route path='/login'>
    <Login />
  </Route>
  </Routes>
  </NavBar>
  </div>
)}

export default App