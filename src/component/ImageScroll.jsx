import React, { useEffect, useState } from 'react';
import './ImageSlider.css'; 
import test from '../Image/Img5.png'
import intro from '../Image/Img2.png'
import supp_sketch from '../Image/Img3.png'
import website from '../Image/Img4.png'
import test2 from '../Image/Img7.png'
import test3 from '../Image/Img6.png'


function ImageScroll() {
    const [currentIndex, setCurrentIndex] = useState(0);
   const images=[supp_sketch,test,intro,website,test2,test3,supp_sketch]
  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const interval = 2000;
  useEffect(() => {
    const intervalId = setInterval(() => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        }
      scrollRight();
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex, interval]);

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };
  return (
    <div className="image-slider">
        <div className="controls">
      <button onClick={scrollLeft} disabled={currentIndex === 0}>
        &lt;
      </button>
    </div>

    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={index === currentIndex ? 'add visible' : 'add notvisible'}
        />
      ))}
    </div>
    <div className="controls">
      <button onClick={scrollRight} disabled={currentIndex === images.length - 1}>
        &gt;
      </button>
    </div>
  </div>
  )
}

export default ImageScroll
