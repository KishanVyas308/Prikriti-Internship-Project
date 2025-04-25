import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

const Services = () => {

  const sectorServices = [
    {
      id: 1,
      title: "GST",
      description:
        "From foundation to finishing touches, our construction services deliver quality at every step.",
      icon: "./images/GST.png",
      features: [
        "GST Registration",
        "GST Filing",
        "GST Compliance",
        "GST Advisory",
      ],
      path: "/services/construction",
    },
    {
      id: 2,
      title: "Taxation",
      description:
        "Expert planning, scheduling, and coordination to ensure your project is completed on time and within budget.",
      icon: "./images/Taxation.png",
      features: [
        "Income Tax Filing",
        "Tax Planning",
        "Corporate Tax",
        "Tax Advisory",
      ],
      path: "/services/project-management",
    },
    {
      id: 3,
      title: "Company Law Matter",
      description:
        "Creating functional, aesthetically pleasing commercial spaces that meet your business needs.",
      icon: "./images/Company_Law_Matter.png",
      features: [
        "Company Registration",
        "Compliance Management",
        "Corporate Governance",
        "Legal Advisory",
      ],
      path: "/services/commercial",
    },
    {
      id: 4,
      title: "Other Services",
      description:
        "Building beautiful homes and residential communities with quality and comfort in mind.",
      icon: "./images/Other_Services.png",
      features: [
        "Advisory Services",
        "Custom Solutions",
        "Consultation",
        "Support Services",
      ],
      path: "/services/residential",
    },
    {
      id: 5,
      title: "Project Finance",
      description:
        "Constructing robust industrial facilities designed for efficiency, safety, and productivity.",
      icon: "./images/Project_Finance.png",
      features: [
        "Financial Planning",
        "Loan Assistance",
        "Budget Management",
        "Investment Advisory",
      ],
      path: "/services/industrial",
    },
    {
      id: 6,
      title: "Govt. Grants & Subsidies",
      description:
        "Comprehensive design and planning services to turn your vision into reality.",
      icon: "./images/Govt_Grants_Subsidies.png",
      features: [
        "Grant Applications",
        "Subsidy Management",
        "Government Liaison",
        "Policy Advisory",
      ],
      path: "/services/design",
    },
    {
      id: 7,
      title: "DGFT",
      description:
        "Comprehensive design and planning services to turn your vision into reality.",
      icon: "./images/DGFT.png",
      features: [
        "Export-Import Licensing",
        "DGFT Compliance",
        "Policy Guidance",
        "Documentation Support",
      ],
      path: "/services/design",
    },
    {
      id: 8,
      title: "Customs",
      description:
        "Comprehensive design and planning services to turn your vision into reality.",
      icon: "./images/Customs.png",
      features: [
        "Customs Clearance",
        "Duty Calculation",
        "Regulatory Compliance",
        "Trade Advisory",
      ],
      path: "/services/design",
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
              <p className="mt-4 text-xl text-white/90">Expert advisory and compliance solutions for your business</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {sectorServices.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-xl p-6 bg-white border border-gray-100 transition-all duration-300 ease-in-out hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100"
              >
                <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center bg-blue-400 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-10 w-10 object-contain transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="mr-2 text-blue-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 h-24 w-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute right-0 top-0 h-16 w-16 rounded-br-[40px] bg-blue-500 transform rotate-12"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Our Approach Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-3">Our Approach</h2>
              <h3 className="text-4xl font-bold mb-6 text-gray-900">
                How We Work With You
              </h3>
              <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
              <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                At Prikriti, we believe that every business—like nature—thrives through balance, rhythm, and the right conditions for growth.
                Our approach is rooted in insight and designed to help your business grow globally.
              </p>
            </div>

            {/* Process timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 md:left-1/2 md:-ml-0.5"></div>
              
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row">
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-900">Understanding Your Business</h3>
                    <p className="mt-2 text-gray-600">
                      We begin by deeply understanding your business ecosystem, goals, and unique challenges.
                    </p>
                  </div>
                  <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white md:left-1/2 md:-ml-4">1</div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white md:left-1/2 md:-ml-4">2</div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold text-gray-900">Strategic Planning</h3>
                    <p className="mt-2 text-gray-600">
                      We develop tailored strategies that align with your business objectives and market dynamics.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row">
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-900">Implementation & Compliance</h3>
                    <p className="mt-2 text-gray-600">
                      Our experts guide you through implementation while ensuring regulatory compliance.
                    </p>
                  </div>
                  <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white md:left-1/2 md:-ml-4">3</div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white md:left-1/2 md:-ml-4">4</div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold text-gray-900">Sustainable Growth</h3>
                    <p className="mt-2 text-gray-600">
                      We continuously monitor, optimize, and adapt strategies to ensure long-term sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Values */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-3">What We Stand For</h2>
              <h3 className="text-4xl font-bold mb-6 text-gray-900">
                Our Core Values
              </h3>
              <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-blue-600 text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability in Strategy</h3>
                <p className="text-gray-600">Long-term, purpose-driven growth strategies that create lasting value.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-blue-600 text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Perspective, Local Sensibility</h3>
                <p className="text-gray-600">We bridge borders with insight, combining international expertise with local understanding.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-blue-600 text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Natural Alignment</h3>
                <p className="text-gray-600">Business advice that feels intuitive, effective, and uniquely tailored to your needs.</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-24 text-center">
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-6 shadow-md hover:shadow-xl text-white text-lg font-medium rounded-lg"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            {/* Background decorative element */}
            <div className="mt-16 relative hidden md:block">
              <div className="absolute left-0 -top-40 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
              <div className="absolute right-0 -top-40 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
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
