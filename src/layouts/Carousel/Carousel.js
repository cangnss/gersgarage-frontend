import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import service1 from "../../images/service1.jpg";
import service2 from "../../images/service2.jpeg";
import service3 from "../../images/service3.jpg";
import service4 from "../../images/service4.jpg";
import service5 from "../../images/service5.jpg";
import service6 from "../../images/service6.jpeg";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: <img src={service4} width="1200" className="rounded-lg" />,
    },
    {
      image: <img src={service5} width="1200" className="rounded-lg h-128 bg-cover" />,
    },
    {
      image: <img src={service6} width="1200" className="rounded-lg h-128 bg-cover" />,
    },
  ];

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="relative overflow-hidden">
      {slides.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide active" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="my-10 flex justify-center">
                {slide.image}
              </div>
            )}
          </div>
        );
      })}
      <button
        className="absolute top-96 left-0 rounded-full p-2 bg-white text-gray-700 hover:text-gray-800"
        onClick={handlePrevClick}
      >
        <AiFillCaretLeft className="text-4xl" />
      </button>
      <button
        className="absolute top-96 right-0 rounded-full p-2 bg-white text-gray-700 hover:text-gray-800"
        onClick={handleNextClick}
      >
        <AiFillCaretRight className="text-4xl" />
      </button>
    </div>
  );
};

export default Carousel;
