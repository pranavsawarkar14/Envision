// App.js
import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h1>Welcome to Envision</h1>
        <p>This is the only website for the AR Education.</p>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Envision. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
