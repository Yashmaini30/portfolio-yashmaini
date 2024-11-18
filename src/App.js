import React from 'react';
import './App.css';
import Navbar from './componennts/Navbar';
import Home from './componennts/Home';
import About from './componennts/About';
import Footer from './componennts/Footer';
import Resume from './componennts/Resume';


function App() {
  return (
    <>
    <Navbar/>
    <Resume/>
    <Footer/>
    </>  
  );
}

export default App;
