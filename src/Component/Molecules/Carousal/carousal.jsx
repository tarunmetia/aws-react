import React, { useState } from 'react';
import Buttons from '../../Atoms/Buttons/Buttons'
import './Carousal.scss';

const Carousal = ({slides}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <Buttons handleClick ={prevSlide} label={'‹'} styleProps="nav prev"/>
      <div className="carousel-slide">
        <img src={slides[current].image} alt={`Slide ${current + 1}`} />
        <p className="caption">{slides[current].caption}</p>
      </div>
      <Buttons handleClick ={nextSlide} label={'›'} styleProps="nav next"/>
    </div>
  );
};

export default Carousal;
