import React from 'react';
import './App.css';
import Navbar from './components/navbar_comp/Navbar';
import Header from './components/header_comp/Header';
import About from './components/about_comp/About';
import Work from './components/work_comp/Work';
import Projects from './components/proj_comp/Projects';
import Connect from './components/connect_comp/Connect';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;
