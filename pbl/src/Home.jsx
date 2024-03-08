import React from 'react';

const HomePage = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="nav-logo">Envision</h1>
        <div className="navbar-menu-container">
          <svg className="menu-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="20" y1="20" x2="80" y2="20" />
            <line x1="20" y1="50" x2="80" y2="50" />
            <line x1="20" y1="80" x2="80" y2="80" />
          </svg>
          <ul className="navbar-links-container">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <section className="hero-section">
        <img src="banner.jpg" alt="Hero Banner" className="hero-image" />
        <div className="hero-text-container">
          <h2 className="hero-heading">Welcome to Our Website</h2>
          <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem at lorem venenatis vestibulum.</p>
          <button className="primary-button">Learn More</button>
        </div>
      </section>
      {/* Add more sections for About, Services, etc. */}
      <footer className="footer">
        <p className="copyright">© 2024 Your Brand Name</p>
      </footer>
    </div>
  );
};

export default HomePage;

