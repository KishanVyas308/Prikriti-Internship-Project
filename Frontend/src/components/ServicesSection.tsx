
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "🏗️",
      title: "Construction",
      description:
        "From foundation to finishing touches, our construction services deliver quality at every step.",
      link: "/services/construction",
    },
    {
      id: 2,
      icon: "📋",
      title: "Project Management",
      description:
        "Expert planning, scheduling, and coordination to ensure your project is completed on time and within budget.",
      link: "/services/project-management",
    },
    {
      id: 3,
      icon: "🏢",
      title: "Commercial Buildings",
      description:
        "Creating functional, aesthetically pleasing commercial spaces that meet your business needs.",
      link: "/services/commercial",
    },
    {
      id: 4,
      icon: "🏡",
      title: "Residential Developments",
      description:
        "Building beautiful homes and residential communities with quality and comfort in mind.",
      link: "/services/residential",
    },
    {
      id: 5,
      icon: "🏭",
      title: "Industrial Facilities",
      description:
        "Constructing robust industrial facilities designed for efficiency, safety, and productivity.",
      link: "/services/industrial",
    },
    {
      id: 6,
      icon: "📝",
      title: "Design & Planning",
      description:
        "Comprehensive design and planning services to turn your vision into reality.",
      link: "/services/design",
    },
  ];

  return (
    <section className="bg-cbm-gray py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="inline-block relative text-3xl font-bold text-cbm-navy mb-4">
            <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-cbm-orange after:content-['']">
              Our Services
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            CBM Group offers a wide range of construction and project management services tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-lg bg-white p-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-cbm-navy">
                {service.title}
              </h3>
              <p className="mb-4 text-gray-700">{service.description}</p>
              <Link
                to={service.link}
                className="inline-block text-cbm-blue hover:text-cbm-navy hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="rounded bg-cbm-blue px-6 py-3 font-medium text-white transition hover:bg-cbm-navy"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
