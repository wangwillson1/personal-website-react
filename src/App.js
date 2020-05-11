import React from 'react';
import './App.css';
import Navbar from './components/navbar_comp/Navbar';
import Header from './components/header_comp/Header';
import About from './components/about_comp/About';
import Work from './components/work_comp/Work';
import Projects from './components/proj_comp/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Projects />
      <header className="App-header">
        <p>
          Success.
        </p>
      </header>
    </div>
  );
}

export default App;
