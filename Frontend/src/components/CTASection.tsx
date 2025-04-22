
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-cbm-blue py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="lg:w-2/3">
            <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-lg text-white/90">
              Partner with CBM Group for exceptional construction and project management services. 
              Contact us today to discuss your project requirements and discover how we can bring your vision to life.
            </p>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="rounded-lg bg-white px-6 py-3 font-medium text-cbm-blue transition hover:bg-cbm-navy hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="rounded-lg border border-white bg-transparent px-6 py-3 font-medium text-white transition hover:bg-white hover:text-cbm-blue"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
