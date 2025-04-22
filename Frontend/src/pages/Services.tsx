
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      id: 1,
      title: "Construction Services",
      description:
        "We provide comprehensive construction services from ground-up development to renovations and expansions.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      path: "/services/construction",
    },
    {
      id: 2,
      title: "Project Management",
      description:
        "Our project management services ensure your construction project is completed on time, within budget, and to the highest quality standards.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      path: "/services/project-management",
    },
    {
      id: 3,
      title: "Design & Planning",
      description:
        "We offer comprehensive design and planning services to transform your vision into a functional, aesthetic reality.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      path: "/services/design",
    },
  ];

  const sectorServices = [
    {
      id: 1,
      title: "Commercial Buildings",
      description:
        "From office complexes to retail spaces, we create commercial environments that balance functionality, aesthetics, and return on investment.",
      icon: "🏢",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Hotels & Hospitality",
        "Mixed-Use Developments",
      ],
      path: "/services/commercial",
    },
    {
      id: 2,
      title: "Residential Developments",
      description:
        "We develop quality residential spaces from luxury apartments to affordable housing communities, focusing on comfort and lifestyle.",
      icon: "🏡",
      features: [
        "Luxury Apartments",
        "Residential Complexes",
        "Villas & Individual Homes",
        "Township Development",
      ],
      path: "/services/residential",
    },
    {
      id: 3,
      title: "Industrial Facilities",
      description:
        "Our industrial construction services deliver functional, efficient facilities designed for specific operational requirements.",
      icon: "🏭",
      features: [
        "Manufacturing Plants",
        "Warehouses & Distribution Centers",
        "Industrial Parks",
        "Special Purpose Facilities",
      ],
      path: "/services/industrial",
    },
    {
      id: 4,
      title: "Infrastructure Projects",
      description:
        "We contribute to nation-building through infrastructure projects that connect communities and support economic growth.",
      icon: "🌉",
      features: [
        "Roads & Highways",
        "Bridges & Flyovers",
        "Water Supply Systems",
        "Public Amenities",
      ],
      path: "/services/infrastructure",
    },
  ];

  const specializedServices = [
    {
      id: 1,
      title: "Renovation & Restoration",
      description: "Breathing new life into existing structures while preserving their character.",
    },
    {
      id: 2,
      title: "Green Building Solutions",
      description: "Sustainable construction practices for environmentally responsible buildings.",
    },
    {
      id: 3,
      title: "Interior Fit-outs",
      description: "Complete interior solutions that optimize functionality and aesthetics.",
    },
    {
      id: 4,
      title: "MEP Services",
      description: "Mechanical, electrical, and plumbing services for complex building systems.",
    },
    {
      id: 5,
      title: "Structural Engineering",
      description: "Expert structural solutions for buildings of all types and complexities.",
    },
    {
      id: 6,
      title: "Value Engineering",
      description: "Optimizing project value through analysis of function, quality, and cost.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">Our Services</h1>
              <p className="mt-4 text-xl text-white/90">Comprehensive construction and project management solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="relative mb-6 text-3xl font-bold text-cbm-navy">
              <span className="relative z-10 pr-4 after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-12 after:-translate-y-1/2 after:bg-cbm-orange after:content-['']">
                Core Services
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">
              At CBM Group, we offer a comprehensive range of construction and project management services designed to meet the unique needs of each client and project.
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
              {mainServices.map((service) => (
                <div key={service.id} className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold text-cbm-navy">{service.title}</h3>
                    <p className="mb-4 text-gray-700">{service.description}</p>
                    <Link
                      to={service.path}
                      className="inline-block rounded bg-cbm-blue px-4 py-2 font-medium text-white transition hover:bg-cbm-navy"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sector-Specific Services */}
          <div className="mb-16">
            <h2 className="relative mb-6 text-3xl font-bold text-cbm-navy">
              <span className="relative z-10 pr-4 after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-12 after:-translate-y-1/2 after:bg-cbm-orange after:content-['']">
                Sector-Specific Services
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">
              We provide specialized construction services across various sectors, each with its unique requirements and challenges.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              {sectorServices.map((service) => (
                <div key={service.id} className="rounded-lg bg-cbm-gray p-6 transition-all hover:bg-white hover:shadow-lg">
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-cbm-navy">{service.title}</h3>
                  <p className="mb-4 text-gray-700">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-cbm-blue">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="inline-block text-cbm-blue hover:text-cbm-navy hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Services */}
          <div>
            <h2 className="relative mb-6 text-3xl font-bold text-cbm-navy">
              <span className="relative z-10 pr-4 after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-12 after:-translate-y-1/2 after:bg-cbm-orange after:content-['']">
                Specialized Services
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">
              In addition to our core services, we offer specialized solutions to address specific project requirements.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {specializedServices.map((service) => (
                <div key={service.id} className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="mb-3 text-xl font-bold text-cbm-navy">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-cbm-gray py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="inline-block relative text-3xl font-bold text-cbm-navy mb-4">
              <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-cbm-orange after:content-['']">
                Our Process
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              We follow a systematic approach to ensure the successful delivery of all our projects.
            </p>
          </div>
          
          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-cbm-blue md:left-1/2 md:-ml-0.5"></div>
            
            {/* Process steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                  <h3 className="text-xl font-bold text-cbm-navy">Consultation & Planning</h3>
                  <p className="mt-2 text-gray-700">
                    We begin with a thorough consultation to understand your project requirements,
                    goals, and constraints, followed by comprehensive planning.
                  </p>
                </div>
                <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-cbm-blue text-white md:left-1/2 md:-ml-4">1</div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-cbm-blue text-white md:left-1/2 md:-ml-4">2</div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold text-cbm-navy">Design & Engineering</h3>
                  <p className="mt-2 text-gray-700">
                    Our design team works closely with you to develop architectural and engineering 
                    plans that align with your vision and functional requirements.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                  <h3 className="text-xl font-bold text-cbm-navy">Procurement & Pre-Construction</h3>
                  <p className="mt-2 text-gray-700">
                    We handle material procurement and pre-construction activities, ensuring all 
                    resources are in place before construction begins.
                  </p>
                </div>
                <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-cbm-blue text-white md:left-1/2 md:-ml-4">3</div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-cbm-blue text-white md:left-1/2 md:-ml-4">4</div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold text-cbm-navy">Construction Execution</h3>
                  <p className="mt-2 text-gray-700">
                    Our experienced teams execute the construction phase with precision, adhering to 
                    safety standards and quality control protocols.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                  <h3 className="text-xl font-bold text-cbm-navy">Quality Assurance</h3>
                  <p className="mt-2 text-gray-700">
                    Throughout the project, we implement rigorous quality assurance measures to ensure 
                    that every aspect meets our high standards.
                  </p>
                </div>
                <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-cbm-blue text-white md:left-1/2 md:-ml-4">5</div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Step 6 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-cbm-blue text-white md:left-1/2 md:-ml-4">6</div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold text-cbm-navy">Project Completion & Handover</h3>
                  <p className="mt-2 text-gray-700">
                    We complete final inspections, address any remaining details, and formally 
                    hand over the project along with all necessary documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
