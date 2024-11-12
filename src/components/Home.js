import React, { useState } from 'react';
import Header from './Header';  // Ensure this is the correct path to your Header component
import Footer from './Footer';  // Ensure this is the correct path to your Footer component
import './Home.css'; // Ensure Home.css exists and is being applied

const places = [
  {
    name: 'Paris',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79lMmLbkyF2Dj2u1pNmWrjlUZfAjDQak0VA&s', 
    description: 'The city of lights.',
  },
  {
    name: 'New York',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxaNt3s_mOwaYEQiem3G6_CPFdOhWfooF9A&s',
    description: 'The city that never sleeps.',
  },
  {
    name: 'Tokyo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrulFTAknLV8CcmPf-QnowiYj23UXVv8uHDQ&s',
    description: 'A blend of tradition and modernity.',
  },
];

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // You can toggle this for login/logout state

  const handleLogout = () => {
    // Clear user data (simulating log out)
    // For example, clearing local storage (or any other state management system you're using)
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    alert('Logged out successfully');
  };

  return (
    <div className="home">
      <Header onLogout={handleLogout} /> {/* Pass logout function to Header */}
      
      <div className="home-content">
        <h2>Welcome to Travel Tours</h2>
        <div className="cards-container">
          {places.map((place, index) => (
            <div className="card" key={index}>
              <img src={place.image} alt={place.name} />
              <div className="card-info">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer /> {/* Include Footer */}
    </div>
  );
};

export default Home;
