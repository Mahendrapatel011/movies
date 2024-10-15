import React from 'react';
import './About.css'; // Import the CSS file
import { FaInstagram } from 'react-icons/fa'; // Import the Instagram icon

export const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Mahendra Patel</h1>
            <div className="profile-card">
                <img
                    src="\src\API\IMG_2164.JPG" // Replace with the actual photo URL
                    alt="Mahendra Patel"
                    className="profile-photo"
                />
                <div className="profile-info">
                    <h2>Date of Birth: <span className="dob">27 May 2004</span></h2>
                    <p className="thoughts">
                        "I believe in the power of perseverance and hard work. Every challenge is an opportunity to grow and learn."
                    </p>
                    <a
                        href="https://www.instagram.com/mahendra__patel00/" // Your Instagram link
                        target="_blank" // Opens in a new tab
                        rel="noopener noreferrer" // Security measure
                        className="instagram-link"
                    >
                        <FaInstagram className="instagram-icon" /> 
                        @mahendra__patel00
                    </a>
                </div>
            </div>
        </div>
    );
};
