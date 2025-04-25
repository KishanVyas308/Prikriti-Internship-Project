import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cbm-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              <span className="text-cbm-lightblue">Prikriti</span>
            </h3>
            <p className="mb-4 text-white/70">
              Rooted in Insight. Growing Global.
            </p>
            <address className="not-italic text-white/70">
              <p>905-906-907, A-Wing, 9th Floor, RK Iconic, Sheetal Park</p>
              <p>Rajkot, Gujarat 360006</p>
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
                <Link to="/services/foreign-trade" className="hover:text-cbm-lightblue">
                  Foreign Trade & Export Promotion
                </Link>
              </li>
              <li>
                <Link to="/services/indirect-taxation" className="hover:text-cbm-lightblue">
                  Indirect Taxation & Regulatory Compliance
                </Link>
              </li>
              <li>
                <Link to="/services/legal" className="hover:text-cbm-lightblue">
                  Legal & Representation Services
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-growth" className="hover:text-cbm-lightblue">
                  Strategic Growth Advisory
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
                <a href="mailto:info@prikriti.in" className="hover:text-cbm-lightblue">
                  info@prikriti.in
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
            &copy; {new Date().getFullYear()} Prikriti. All rights reserved.
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
