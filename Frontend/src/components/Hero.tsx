
import { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
      title: "Building Excellence",
      description: "Creating exceptional spaces with precision and expertise",
      buttonText: "View Projects",
      buttonLink: "/projects",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
      title: "Innovative Design",
      description: "Transforming visions into architectural masterpieces",
      buttonText: "Our Services",
      buttonLink: "/services",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
      title: "Quality Construction",
      description: "Delivering superior quality with attention to detail",
      buttonText: "About Us",
      buttonLink: "/about",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
return (
  <div className="relative h-[600px] w-full overflow-hidden">
    {/* Slides */}
    <div className="relative h-full w-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto flex h-full items-center px-6 md:px-8">
            <div className="max-w-3xl text-white">
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{slide.title}</h2>
              <p className="mb-8 text-lg leading-relaxed md:text-xl">{slide.description}</p>
              <a
                href={slide.buttonLink}
                className="rounded bg-cbm-blue px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:bg-cbm-navy hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cbm-blue focus:ring-offset-2"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Arrows */}
    <button 
      onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50 focus:outline-none"
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button 
      onClick={() => goToSlide((currentSlide + 1) % slides.length)}
      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50 focus:outline-none"
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>

    {/* Slide Indicators */}
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-3">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
            index === currentSlide ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>

  );
};

export default Hero;