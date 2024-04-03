"use client";

import { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/image1.jpg', 
    '/image2.jpg', 
    '/image3.jpg',
    '/image4.jpg', 
    '/image5.jpg', 
    '/image6.jpg', 
    '/image7.jpg', 
    '/image8.jpg', 
    '/image9.jpg', 
    '/image10.jpg', 
];

const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <button className="prev" onClick={goToPrevious}>&#10094;</button>
      <div className='haircuts'>
        <img src={images[currentIndex]} alt="Slideshow"/>
      </div>
      <button className="next" onClick={goToNext}>&#10095;</button>
    </div>
  );
};

export default Slideshow;
