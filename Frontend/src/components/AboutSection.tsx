
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-12">
          {/* Image */}
          <div className="mb-8 w-full max-w-lg lg:mb-0 lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
              alt="Construction site with workers"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="relative mb-6 text-3xl font-bold text-cbm-navy">
              <span className="relative z-10 pr-4 after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-12 after:-translate-y-1/2 after:bg-cbm-orange after:content-['']">
                About CBM Group
              </span>
            </h2>
            <p className="mb-6 text-gray-700">
              Founded in 1995, CBM Group has established itself as a leading construction and project management company. 
              With over 25 years of industry experience, we have successfully delivered hundreds of projects across residential, 
              commercial, and industrial sectors.
            </p>
            <p className="mb-6 text-gray-700">
              Our team of highly skilled professionals is committed to excellence in every aspect of our work. 
              We combine innovative techniques with proven methodologies to deliver exceptional results that exceed 
              our clients' expectations.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-lg bg-cbm-gray p-5">
                <h3 className="mb-2 text-xl font-semibold text-cbm-navy">Our Vision</h3>
                <p className="text-gray-700">
                  To be the preferred partner in construction by delivering innovative, sustainable, and quality projects.
                </p>
              </div>
              <div className="rounded-lg bg-cbm-gray p-5">
                <h3 className="mb-2 text-xl font-semibold text-cbm-navy">Our Mission</h3>
                <p className="text-gray-700">
                  To consistently deliver excellence through skilled craftsmanship, innovative solutions, and superior service.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/about"
                className="rounded bg-cbm-blue px-6 py-3 font-medium text-white transition hover:bg-cbm-navy"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
