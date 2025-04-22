
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "CBM Group delivered our office building project on time and within budget. Their team's professionalism and attention to detail were impressive throughout the construction process.",
      author: "John Smith",
      position: "CEO, TechCorp",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      quote:
        "Working with CBM Group on our residential development was a seamless experience. Their expertise in construction management ensured that our project was executed flawlessly.",
      author: "Sarah Johnson",
      position: "Director, Urban Homes",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      quote:
        "We have partnered with CBM Group on multiple projects, and they consistently exceed our expectations. Their quality of work and commitment to excellence are unmatched in the industry.",
      author: "Michael Chen",
      position: "Project Manager, Global Developments",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const selectTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-cbm-gray py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="inline-block relative text-3xl font-bold text-cbm-navy mb-4">
            <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-cbm-orange after:content-['']">
              Client Testimonials
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            What our clients say about our construction and project management services.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-lg bg-white p-8 shadow-lg">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "absolute inset-0 opacity-0"
                }`}
              >
                <div className="mb-6 text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="mx-auto h-20 w-20 rounded-full object-cover"
                  />
                </div>
                <blockquote className="mb-6 text-center text-lg font-light italic text-gray-700">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <p className="text-lg font-semibold text-cbm-navy">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => selectTestimonial(index)}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? "bg-cbm-blue" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
