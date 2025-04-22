
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Skyline Tower",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/skyline-tower",
    },
    {
      id: 2,
      title: "Green Valley Residences",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/green-valley",
    },
    {
      id: 3,
      title: "Industrial Park Complex",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/industrial-park",
    },
    {
      id: 4,
      title: "Lakefront Mall",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1555443805-658637491dd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      link: "/projects/lakefront-mall",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="inline-block relative text-3xl font-bold text-cbm-navy mb-4">
            <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-cbm-orange after:content-['']">
              Our Projects
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            Explore our portfolio of completed and ongoing projects across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-lg shadow-md">
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
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold text-cbm-navy group-hover:text-cbm-blue">
                  {project.title}
                </h3>
                <span className="inline-block rounded bg-cbm-gray px-2 py-1 text-xs text-cbm-darkgray">
                  {project.category}
                </span>
                <Link
                  to={project.link}
                  className="mt-3 inline-block text-sm text-cbm-blue hover:text-cbm-navy hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="rounded bg-cbm-blue px-6 py-3 font-medium text-white transition hover:bg-cbm-navy"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
