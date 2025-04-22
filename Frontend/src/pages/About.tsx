
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1585558971869-03e18f9446d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">About CBM Group</h1>
              <p className="mt-4 text-xl text-white/90">Our journey, values, and commitment to excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="relative mb-6 text-3xl font-bold text-cbm-navy">
              <span className="relative z-10 pr-4 after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-12 after:-translate-y-1/2 after:bg-cbm-orange after:content-['']">
                Our Story
              </span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="mb-4 text-gray-700">
                  Founded in 1995, CBM Group has emerged as a trusted name in the construction and project management 
                  industry. What began as a small team of dedicated professionals has grown into a comprehensive 
                  construction company with a reputation for excellence, reliability, and innovation.
                </p>
                <p className="mb-4 text-gray-700">
                  Over the past two decades, we have successfully completed numerous landmark projects across various 
                  sectors, including residential, commercial, and industrial. Our journey is marked by continuous 
                  learning, adaptation to industry advancements, and a commitment to exceeding client expectations.
                </p>
                <p className="text-gray-700">
                  Today, CBM Group stands as a symbol of quality construction and exceptional project management, 
                  backed by a diverse portfolio of successful projects and a team of industry experts who are 
                  passionate about creating spaces that inspire and endure.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="CBM Group construction site" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="relative mb-6 text-3xl font-bold text-cbm-navy">
              <span className="relative z-10 pr-4 after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-12 after:-translate-y-1/2 after:bg-cbm-orange after:content-['']">
                Our Mission & Vision
              </span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-cbm-gray p-8 rounded-lg">
                <h3 className="text-xl font-bold text-cbm-navy mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To consistently deliver excellence through skilled craftsmanship, innovative solutions, and superior 
                  service. We strive to create exceptional spaces that meet the functional needs of our clients while 
                  exceeding their expectations in quality, timeline, and budget management.
                </p>
              </div>
              <div className="bg-cbm-gray p-8 rounded-lg">
                <h3 className="text-xl font-bold text-cbm-navy mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the preferred partner in construction by delivering innovative, sustainable, and quality projects. 
                  We aim to set industry benchmarks through our commitment to excellence, ethical practices, and the 
                  integration of cutting-edge technologies in construction and project management.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="relative mb-6 text-3xl font-bold text-cbm-navy">
              <span className="relative z-10 pr-4 after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-12 after:-translate-y-1/2 after:bg-cbm-orange after:content-['']">
                Our Values
              </span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-cbm-orange">🏗️</div>
                <h3 className="text-xl font-bold text-cbm-navy mb-2">Excellence</h3>
                <p className="text-gray-700">
                  We are committed to the highest standards of quality in every aspect of our work, 
                  from planning and design to construction and project completion.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-cbm-orange">🤝</div>
                <h3 className="text-xl font-bold text-cbm-navy mb-2">Integrity</h3>
                <p className="text-gray-700">
                  We conduct our business with honesty, transparency, and ethical practices, 
                  building trust with our clients, partners, and team members.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-cbm-orange">💡</div>
                <h3 className="text-xl font-bold text-cbm-navy mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We embrace innovative technologies and methodologies to improve efficiency, 
                  sustainability, and the overall quality of our construction projects.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-cbm-orange">👥</div>
                <h3 className="text-xl font-bold text-cbm-navy mb-2">Teamwork</h3>
                <p className="text-gray-700">
                  We believe in the power of collaboration, fostering a supportive environment 
                  where every team member contributes to our collective success.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-cbm-orange">⏱️</div>
                <h3 className="text-xl font-bold text-cbm-navy mb-2">Timeliness</h3>
                <p className="text-gray-700">
                  We respect the value of time, ensuring that our projects are delivered on schedule 
                  without compromising on quality or safety standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-cbm-orange">🌱</div>
                <h3 className="text-xl font-bold text-cbm-navy mb-2">Sustainability</h3>
                <p className="text-gray-700">
                  We are committed to environmentally responsible construction practices, 
                  incorporating sustainable solutions in our projects when possible.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="relative mb-6 text-3xl font-bold text-cbm-navy">
              <span className="relative z-10 pr-4 after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-12 after:-translate-y-1/2 after:bg-cbm-orange after:content-['']">
                Leadership Team
              </span>
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src="https://randomuser.me/api/portraits/men/25.jpg"
                    alt="CEO"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-cbm-navy">Rajesh Sharma</h3>
                <p className="text-cbm-blue">Founder & CEO</p>
                <p className="mt-2 text-gray-700">
                  With over 30 years of experience in the construction industry,
                  Rajesh has led CBM Group from its inception to become a leader in the field.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="COO"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-cbm-navy">Priya Patel</h3>
                <p className="text-cbm-blue">Chief Operations Officer</p>
                <p className="mt-2 text-gray-700">
                  Priya oversees all operational aspects of our projects,
                  ensuring they are delivered with the highest standards of quality and efficiency.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src="https://randomuser.me/api/portraits/men/35.jpg"
                    alt="Technical Director"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-cbm-navy">Vikram Singh</h3>
                <p className="text-cbm-blue">Technical Director</p>
                <p className="mt-2 text-gray-700">
                  A civil engineer with extensive expertise, Vikram leads our technical teams and
                  ensures the structural integrity and innovation of our projects.
                </p>
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

export default About;
