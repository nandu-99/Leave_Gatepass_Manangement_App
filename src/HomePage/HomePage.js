import React from 'react';
import './HomePage.css'; // Import the CSS file

function HomePage() {
 return (
    <div className="home-page">
      <div className="top-bar">
        <button className="bar-icon">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className="content">
        <div className="action-box">
          <div className="action-button">
            <button className="generate-gate-pass">
              <i className="fas fa-plus-circle"></i>
            </button>
            <p>Generate your gate pass</p>
          </div>
        </div>
        <div className="action-box">
          <div className="action-button">
            <button className="generate-leave">
              <i className="fas fa-plus-circle"></i>
            </button>
            <p>Generate your leave</p>
          </div>
        </div>
      </div>
    </div>
 );
};

export default HomePage;
