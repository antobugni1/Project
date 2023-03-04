import React from 'react';
import { Navbar, Portfolio, Home, Echipa,Footer } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Home/>
    <Portfolio/>
    <Echipa/>
    <Footer/>
  </div>
);

export default App;