import React from 'react';
import Promotions from './components/Promotions';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>PAQUETES Y PROMOCIONES</h1>
        <h2>METAL SHAPERS RACING STORE</h2>
      </header>
      <Promotions />
    </div>
  );
}

export default App;