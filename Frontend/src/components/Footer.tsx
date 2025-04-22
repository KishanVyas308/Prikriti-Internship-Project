
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cbm-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              <span className="text-cbm-lightblue">CBM</span> Group
            </h3>
            <p className="mb-4 text-white/70">
              Excellence in construction and project management since 1995.
            </p>
            <address className="not-italic text-white/70">
              <p>123 Construction Avenue</p>
              <p>Building Heights, Suite 456</p>
              <p>Mumbai, India 400001</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link to="/" className="hover:text-cbm-lightblue">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cbm-lightblue">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cbm-lightblue">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cbm-lightblue">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-cbm-lightblue">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cbm-lightblue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link to="/services/construction" className="hover:text-cbm-lightblue">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/services/project-management" className="hover:text-cbm-lightblue">
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="hover:text-cbm-lightblue">
                  Commercial Buildings
                </Link>
              </li>
              <li>
                <Link to="/services/residential" className="hover:text-cbm-lightblue">
                  Residential Developments
                </Link>
              </li>
              <li>
                <Link to="/services/industrial" className="hover:text-cbm-lightblue">
                  Industrial Facilities
                </Link>
              </li>
              <li>
                <Link to="/services/design" className="hover:text-cbm-lightblue">
                  Design & Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>+91 2234567890</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@cbmgroup.in" className="hover:text-cbm-lightblue">
                  info@cbmgroup.in
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🕒</span>
                <span>
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat: 9:00 AM - 1:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col items-center justify-between space-y-4 text-center sm:flex-row sm:space-y-0 sm:text-left">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} CBM Group. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/70 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
