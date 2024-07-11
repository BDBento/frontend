import React, { useState } from 'react';
import './Card.css';

const Card = ({ imageUrls }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="card">
            <div className="card-image">
                <img src={imageUrls[currentIndex]} alt={`Card ${currentIndex + 1}`} />
            </div>
            <div className="card-navigation">
                <button className="nav-button" onClick={handlePrevious}>{'<'}</button>
                <button className="nav-button" onClick={handleNext}>{'>'}</button>
            </div>
        </div>
    );
};

export default Card;