import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-16">
          {/* Image with decorative element */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative mb-12 w-full max-w-lg lg:mb-0 lg:w-2/5"
          >
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border-2 border-cbm-blue/20 bg-transparent"></div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
              alt="Construction site with workers"
              className="relative z-10 rounded-lg object-cover shadow-xl transition-all duration-300 hover:shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="mb-2 flex items-center">
              <div className="h-[3px] w-10 bg-cbm-orange"></div>
              <span className="ml-3 text-sm font-semibold uppercase tracking-wider text-cbm-orange">Who We Are</span>
            </div>
            <h2 className="mb-8 text-4xl font-bold text-cbm-navy">
              About <span className="text-cbm-blue">Prikriti</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Founded with vision and driven by values, Prikriti is a modern advisory firm guiding businesses in foreign trade, compliance, and growth strategy.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-gray-700">
              With deep-rooted experience and a future-focused outlook, we have empowered clients across sectors to expand confidently into global markets.
            </p>
            
            <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="group rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cbm-blue/20 hover:shadow-md">
                <div className="mb-4 inline-block rounded-full bg-cbm-blue/10 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cbm-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-cbm-navy">Our Vision</h3>
                <p className="text-gray-700">
                  Our strength lies in combining local expertise with global perspectives—whether through regulatory navigation, strategic planning, or trade facilitation.
                </p>
              </div>
              <div className="group rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cbm-blue/20 hover:shadow-md">
                <div className="mb-4 inline-block rounded-full bg-cbm-orange/10 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cbm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-cbm-navy">Our Mission</h3>
                <p className="text-gray-700">
                  Our dedicated team of experts ensures clarity, compliance, and creativity in every engagement, helping you align your business naturally with evolving global dynamics.
                </p>
              </div>
            </div>
            
            <Link
              to="/about"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-cbm-blue px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-cbm-navy"
            >
              <span className="relative z-10">Learn More About Us</span>
              <span className="absolute right-0 top-0 h-full w-0 rounded-full bg-cbm-navy opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100"></span>
              <svg className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
