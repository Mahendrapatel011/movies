import React from 'react';
import './Home.css'; // Import the CSS file
import { NavLink } from 'react-router-dom';
import { Movie } from './Movie';

export const Home = () => {
    return (
        <div className="home-container">
            <h1 className="main-title">Welcome to Mahen's Streaming</h1>
            <h2 className="sub-title">Stream Your Favorite Avengers Movies</h2>
            <p className="description">
                Join us on an epic journey through the Marvel universe. Watch all your favorite Avengers movies, and experience the action like never before!
            </p>
            <NavLink to="./Movie">
                <button className="explore-button">Explore Now</button>
            </NavLink>
        </div>
    );
};
