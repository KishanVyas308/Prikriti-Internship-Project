
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
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto flex h-full items-center px-4">
              <div className="max-w-3xl text-white">
                <h2 className="mb-4 text-5xl font-bold">{slide.title}</h2>
                <p className="mb-8 text-xl">{slide.description}</p>
                <a
                  href={slide.buttonLink}
                  className="rounded bg-cbm-blue px-6 py-3 font-medium text-white transition hover:bg-cbm-navy"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
