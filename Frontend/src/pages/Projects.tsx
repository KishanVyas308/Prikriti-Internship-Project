
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Skyline Tower",
      category: "Commercial",
      location: "Mumbai, India",
      year: "2022",
      description: "A 30-story commercial tower with modern office spaces and retail outlets.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/skyline-tower",
    },
    {
      id: 2,
      title: "Green Valley Residences",
      category: "Residential",
      location: "Pune, India",
      year: "2021",
      description: "A luxury residential complex featuring 200 premium apartments with modern amenities.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/green-valley",
    },
    {
      id: 3,
      title: "Industrial Park Complex",
      category: "Industrial",
      location: "Ahmedabad, India",
      year: "2020",
      description: "A comprehensive industrial park with manufacturing facilities and logistics infrastructure.",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/industrial-park",
    },
    {
      id: 4,
      title: "Lakefront Mall",
      category: "Commercial",
      location: "Delhi, India",
      year: "2019",
      description: "A premier shopping and entertainment destination with waterfront views.",
      image: "https://images.unsplash.com/photo-1555443805-658637491dd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/lakefront-mall",
    },
    {
      id: 5,
      title: "Highway Expansion Project",
      category: "Infrastructure",
      location: "Karnataka, India",
      year: "2020",
      description: "A 120-kilometer highway expansion project improving connectivity between major cities.",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/highway-expansion",
    },
    {
      id: 6,
      title: "Sunset Heights",
      category: "Residential",
      location: "Bangalore, India",
      year: "2018",
      description: "A premium residential tower with panoramic city views and luxury amenities.",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/sunset-heights",
    },
    {
      id: 7,
      title: "Tech Hub Campus",
      category: "Commercial",
      location: "Hyderabad, India",
      year: "2021",
      description: "A modern campus for technology companies with collaborative workspaces.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/tech-hub",
    },
    {
      id: 8,
      title: "Manufacturing Facility",
      category: "Industrial",
      location: "Gujarat, India",
      year: "2019",
      description: "A state-of-the-art manufacturing facility for automotive components.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/manufacturing-facility",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">Our Projects</h1>
              <p className="mt-4 text-xl text-white/90">Explore our portfolio of successful construction projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`rounded-full px-6 py-2 ${
                activeFilter === "all"
                  ? "bg-cbm-blue text-white"
                  : "bg-cbm-gray text-cbm-navy hover:bg-cbm-navy hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter("commercial")}
              className={`rounded-full px-6 py-2 ${
                activeFilter === "commercial"
                  ? "bg-cbm-blue text-white"
                  : "bg-cbm-gray text-cbm-navy hover:bg-cbm-navy hover:text-white"
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveFilter("residential")}
              className={`rounded-full px-6 py-2 ${
                activeFilter === "residential"
                  ? "bg-cbm-blue text-white"
                  : "bg-cbm-gray text-cbm-navy hover:bg-cbm-navy hover:text-white"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveFilter("industrial")}
              className={`rounded-full px-6 py-2 ${
                activeFilter === "industrial"
                  ? "bg-cbm-blue text-white"
                  : "bg-cbm-gray text-cbm-navy hover:bg-cbm-navy hover:text-white"
              }`}
            >
              Industrial
            </button>
            <button
              onClick={() => setActiveFilter("infrastructure")}
              className={`rounded-full px-6 py-2 ${
                activeFilter === "infrastructure"
                  ? "bg-cbm-blue text-white"
                  : "bg-cbm-gray text-cbm-navy hover:bg-cbm-navy hover:text-white"
              }`}
            >
              Infrastructure
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="mb-1 inline-block rounded bg-cbm-blue px-2 py-1 text-xs">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm">{project.location}, {project.year}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-bold text-cbm-navy group-hover:text-cbm-blue">
                    {project.title}
                  </h3>
                  <div className="mb-2 flex items-center space-x-3">
                    <span className="inline-block rounded bg-cbm-gray px-2 py-1 text-xs text-cbm-darkgray">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-600">
                      {project.location}
                    </span>
                    <span className="text-xs text-gray-600">
                      {project.year}
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-gray-700">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block text-sm text-cbm-blue hover:text-cbm-navy hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process Section */}
      <section className="bg-cbm-gray py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="inline-block relative text-3xl font-bold text-cbm-navy mb-4">
              <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-cbm-orange after:content-['']">
                Project Excellence
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              Our approach to every project is guided by our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 text-4xl text-cbm-blue">🔍</div>
              <h3 className="mb-3 text-xl font-bold text-cbm-navy">Meticulous Planning</h3>
              <p className="text-gray-700">
                Every project begins with comprehensive planning, addressing all aspects from design and logistics to timeline and resource allocation.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 text-4xl text-cbm-blue">👥</div>
              <h3 className="mb-3 text-xl font-bold text-cbm-navy">Expert Execution</h3>
              <p className="text-gray-700">
                Our skilled teams execute each phase of the project with precision, adhering to industry standards and best practices.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 text-4xl text-cbm-blue">🔄</div>
              <h3 className="mb-3 text-xl font-bold text-cbm-navy">Continuous Monitoring</h3>
              <p className="text-gray-700">
                We implement rigorous monitoring systems to track progress, maintain quality, and address any challenges promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;
