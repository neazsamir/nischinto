import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const slides = [
    { id: 1, image: "https://softivuspro.com/mosto/money-transfer/assets/images/screenshot/shot-five.png" },
    { id: 2, image: "https://softivuspro.com/mosto/money-transfer/assets/images/screenshot/shot-one.png" },
    { id: 3, image: "https://softivuspro.com/mosto/money-transfer/assets/images/screenshot/shot-two.png" },
    { id: 4, image: "https://softivuspro.com/mosto/money-transfer/assets/images/screenshot/shot-four.png" },
    { id: 5, image: "https://softivuspro.com/mosto/money-transfer/assets/images/android.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative max-w-[250px] lg:max-w-[300px] mx-auto">
      {/* Carousel Slides */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={`Screenshot ${slide.id}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={`h-2 w-2 mx-1 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export { Carousel };