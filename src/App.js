import React from 'react';
import './App.css';
import Navbar from './components/navbar_comp/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>
          Success.
        </p>
      </header>
    </div>
  );
}

export default App;
