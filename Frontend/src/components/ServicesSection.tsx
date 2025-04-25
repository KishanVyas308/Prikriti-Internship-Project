import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: "/images/GST.png",
      title: "GST",
      description:
        "Comprehensive GST compliance & advisory services to navigate the complex tax framework with confidence.",
      link: "/services/gst",
    },
    {
      id: 2,
      icon: "/images/Taxation.png",
      title: "Taxation",
      description:
        "Strategic tax planning, compliance services, and personalized solutions to optimize your tax position.",
      link: "/services/taxation",
    },
    {
      id: 3,
      icon: "/images/Company_Law_Matter.png",
      title: "Company Law Matter",
      description:
        "Expert guidance on corporate governance, compliance, and regulatory matters for businesses of all sizes.",
      link: "/services/company-law",
    },
    {
      id: 4,
      icon: "/images/Other_Services.png",
      title: "Other Services",
      description:
        "Specialized business solutions tailored to your unique needs, from accounting to strategic planning.",
      link: "/services/other",
    },
    {
      id: 5,
      icon: "/images/Project_Finance.png",
      title: "Project Finance",
      description:
        "End-to-end project finance solutions, from feasibility assessment to funding and financial structuring.",
      link: "/services/project-finance",
    },
    {
      id: 6,
      icon: "/images/Govt_Grants_Subsidies.png",
      title: "Govt. Grants & Subsidies",
      description:
        "Expert assistance to identify, apply for, and secure government grants and subsidies for your business.",
      link: "/services/grants",
    },
    {
      id: 7,
      icon: "/images/DGFT.png",
      title: "DGFT",
      description:
        "Specialized support for navigating Directorate General of Foreign Trade regulations and procedures.",
      link: "/services/dgft",
    },
    {
      id: 8,
      icon: "/images/Customs.png",
      title: "Customs",
      description:
        "Comprehensive customs solutions to streamline import/export operations and ensure regulatory compliance.",
      link: "/services/customs",
    },
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-3">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Services
          </h3>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Prikriti is dedicated to delivering excellence through expert advisory and compliance services. 
            Our team combines innovative approaches with deep industry knowledge to provide 
            exceptional solutions that empower your business growth.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={childVariants}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className={cn(
                "group relative rounded-xl p-6 bg-white border border-gray-100",
                "transition-all duration-300 ease-in-out",
                "hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100"
              )}
            >
              <div 
                className={cn(
                  "w-16 h-16 rounded-lg mb-6 flex items-center justify-center",
                  "bg-blue-500 text-blue-600 transition-all duration-300",
                  "group-hover:bg-blue-600 group-hover:text-white transform",
                  hoveredService === service.id ? "scale-110" : ""
                )}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className={cn(
                    "h-10 w-10 object-contain transition-all duration-300",
                    "group-hover:filter group-hover:brightness-0 group-hover:invert"
                  )}
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
              
              <Link
                to={service.link}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 h-24 w-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute right-0 top-0 h-16 w-16 rounded-br-[40px] bg-blue-500 transform rotate-12"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button 
            asChild
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-7 shadow-md hover:shadow-xl hover:shadow-blue-100/50 text-white text-lg font-medium rounded-lg"
          >
            <Link to="/services" className="inline-flex items-center gap-2">
              View All Services
              <ExternalLink className="h-5 w-5" />
            </Link>
          </Button>

          {/* Background decorative element */}
          <div className="mt-24 relative hidden md:block">
            <div className="absolute left-0 -top-40 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute right-0 -top-40 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
