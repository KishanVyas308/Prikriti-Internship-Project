import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { useState } from "react";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("openings");

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Project Manager",
      department: "Project Management",
      location: "Mumbai, India",
      type: "Full-time",
      description: "We're seeking an experienced Project Manager to oversee construction projects from inception to completion.",
      requirements: [
        "10+ years of experience in construction project management",
        "Strong leadership and team management skills",
        "Experience with large-scale commercial or residential projects",
        "Knowledge of construction methodologies and industry standards",
        "Excellent communication and client relationship skills",
      ],
      responsibilities: [
        "Lead project teams and coordinate with all stakeholders",
        "Develop and manage project schedules, budgets, and resources",
        "Ensure compliance with quality standards and safety regulations",
        "Identify and mitigate project risks and challenges",
        "Report on project progress and outcomes to senior management",
      ],
    },
    {
      id: 2,
      title: "Civil Engineer",
      department: "Engineering",
      location: "Delhi, India",
      type: "Full-time",
      description: "We're looking for a qualified Civil Engineer to join our engineering team and contribute to various construction projects.",
      requirements: [
        "B.Tech/B.E. in Civil Engineering",
        "3-5 years of experience in construction engineering",
        "Proficiency in AutoCAD and structural analysis software",
        "Knowledge of building codes and standards",
        "Strong analytical and problem-solving skills",
      ],
      responsibilities: [
        "Prepare designs and technical specifications for construction projects",
        "Analyze and interpret engineering data and reports",
        "Conduct site visits to monitor construction progress",
        "Collaborate with architects and other engineering disciplines",
        "Ensure structural integrity and compliance with regulations",
      ],
    },
    {
      id: 3,
      title: "Construction Site Supervisor",
      department: "Operations",
      location: "Bangalore, India",
      type: "Full-time",
      description: "We're hiring a Site Supervisor to oversee daily construction activities and ensure project quality and safety.",
      requirements: [
        "5+ years of experience in construction site supervision",
        "Strong knowledge of construction methods and materials",
        "Familiarity with safety regulations and quality standards",
        "Leadership skills and ability to manage construction teams",
        "Problem-solving aptitude and attention to detail",
      ],
      responsibilities: [
        "Supervise construction activities and coordinate labor teams",
        "Monitor project progress against schedules and plans",
        "Enforce safety protocols and ensure quality control",
        "Coordinate with subcontractors and material suppliers",
        "Report on site activities and address issues promptly",
      ],
    },
    {
      id: 4,
      title: "Architect",
      department: "Design",
      location: "Pune, India",
      type: "Full-time",
      description: "We're seeking a creative and technically skilled Architect to join our design team.",
      requirements: [
        "B.Arch with 5+ years of experience in architectural design",
        "Proficiency in AutoCAD, Revit, and other design software",
        "Portfolio demonstrating design capabilities",
        "Knowledge of building regulations and sustainable design principles",
        "Strong visualization and presentation skills",
      ],
      responsibilities: [
        "Develop architectural designs and concepts for construction projects",
        "Create detailed drawings and specifications",
        "Collaborate with engineers and other design professionals",
        "Incorporate client requirements and feedback into designs",
        "Ensure designs comply with relevant codes and standards",
      ],
    },
  ];

  const [activeJob, setActiveJob] = useState(jobOpenings[0]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">Careers at Prikriti Group</h1>
              <p className="mt-4 text-xl text-white/90">Join our team and build your future with us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="mb-12 border-b border-gray-200">
            <div className="flex flex-wrap -mb-px">
              <button
                onClick={() => setActiveTab("openings")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "openings"
                    ? "text-cbm-blue border-cbm-blue"
                    : "border-transparent hover:text-cbm-blue hover:border-cbm-blue"
                }`}
              >
                Job Openings
              </button>
              <button
                onClick={() => setActiveTab("culture")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "culture"
                    ? "text-cbm-blue border-cbm-blue"
                    : "border-transparent hover:text-cbm-blue hover:border-cbm-blue"
                }`}
              >
                Our Culture
              </button>
              <button
                onClick={() => setActiveTab("benefits")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "benefits"
                    ? "text-cbm-blue border-cbm-blue"
                    : "border-transparent hover:text-cbm-blue hover:border-cbm-blue"
                }`}
              >
                Benefits & Growth
              </button>
            </div>
          </div>

          {/* Job Openings Tab */}
          {activeTab === "openings" && (
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Job List */}
              <div className="lg:col-span-1">
                <h2 className="mb-6 text-2xl font-bold text-cbm-navy">Current Openings</h2>
                <div className="space-y-4">
                  {jobOpenings.map((job) => (
                    <div
                      key={job.id}
                      onClick={() => setActiveJob(job)}
                      className={`cursor-pointer rounded-lg p-4 transition-all ${
                        activeJob.id === job.id
                          ? "bg-cbm-blue text-white"
                          : "bg-cbm-gray hover:bg-cbm-gray/80"
                      }`}
                    >
                      <h3 className={`text-lg font-bold ${
                        activeJob.id === job.id ? "text-white" : "text-cbm-navy"
                      }`}>
                        {job.title}
                      </h3>
                      <p className={activeJob.id === job.id ? "text-white/90" : "text-gray-700"}>
                        {job.department} | {job.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Details */}
              <div className="lg:col-span-2">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h2 className="mb-2 text-2xl font-bold text-cbm-navy">{activeJob.title}</h2>
                  <div className="mb-4 flex flex-wrap gap-3">
                    <span className="rounded-full bg-cbm-gray px-3 py-1 text-sm text-cbm-navy">
                      {activeJob.department}
                    </span>
                    <span className="rounded-full bg-cbm-gray px-3 py-1 text-sm text-cbm-navy">
                      {activeJob.location}
                    </span>
                    <span className="rounded-full bg-cbm-gray px-3 py-1 text-sm text-cbm-navy">
                      {activeJob.type}
                    </span>
                  </div>
                  <p className="mb-6 text-gray-700">{activeJob.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="mb-3 text-xl font-bold text-cbm-navy">Requirements</h3>
                    <ul className="ml-5 list-disc space-y-2 text-gray-700">
                      {activeJob.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="mb-3 text-xl font-bold text-cbm-navy">Responsibilities</h3>
                    <ul className="ml-5 list-disc space-y-2 text-gray-700">
                      {activeJob.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <a
                      href="#application-form"
                      className="rounded bg-cbm-blue px-6 py-3 font-medium text-white transition hover:bg-cbm-navy"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Our Culture Tab */}
          {activeTab === "culture" && (
            <div>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-cbm-navy">Our Work Culture</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-700">
                  At CBM Group, we foster a culture of excellence, innovation, and collaboration. 
                  Our team members are empowered to contribute their best ideas and skills in an 
                  environment that values diversity, creativity, and continuous growth.
                </p>
              </div>
              
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-4xl text-cbm-blue">🚀</div>
                  <h3 className="mb-3 text-xl font-bold text-cbm-navy">Innovation & Excellence</h3>
                  <p className="text-gray-700">
                    We encourage innovative thinking and maintain high standards of excellence in all our endeavors.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-4xl text-cbm-blue">👥</div>
                  <h3 className="mb-3 text-xl font-bold text-cbm-navy">Collaborative Spirit</h3>
                  <p className="text-gray-700">
                    We believe in the power of teamwork and foster a collaborative environment where everyone's contribution is valued.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-4xl text-cbm-blue">🌱</div>
                  <h3 className="mb-3 text-xl font-bold text-cbm-navy">Growth Mindset</h3>
                  <p className="text-gray-700">
                    We promote continuous learning and professional development, helping our team members reach their full potential.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-4xl text-cbm-blue">🤝</div>
                  <h3 className="mb-3 text-xl font-bold text-cbm-navy">Respect & Integrity</h3>
                  <p className="text-gray-700">
                    We treat everyone with respect and conduct our business with the highest level of integrity and ethical standards.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-4xl text-cbm-blue">🎯</div>
                  <h3 className="mb-3 text-xl font-bold text-cbm-navy">Result-Oriented Approach</h3>
                  <p className="text-gray-700">
                    We focus on achieving tangible results while maintaining a balance between efficiency and quality.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-4xl text-cbm-blue">⚖️</div>
                  <h3 className="mb-3 text-xl font-bold text-cbm-navy">Work-Life Balance</h3>
                  <p className="text-gray-700">
                    We understand the importance of balance and support our team members in managing their professional and personal lives.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === "benefits" && (
            <div>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-cbm-navy">Benefits & Growth Opportunities</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-700">
                  CBM Group offers a comprehensive benefits package and numerous opportunities 
                  for professional growth and career advancement.
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-cbm-gray p-8">
                  <h3 className="mb-6 text-2xl font-bold text-cbm-navy">Employee Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Comprehensive Health Insurance</h4>
                        <p className="text-gray-700">Medical, dental, and vision coverage for employees and their families</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Retirement Plans</h4>
                        <p className="text-gray-700">Employer-matched retirement savings options</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Paid Time Off</h4>
                        <p className="text-gray-700">Generous vacation, sick leave, and holiday benefits</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Performance Bonuses</h4>
                        <p className="text-gray-700">Rewarding excellence and outstanding contributions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Wellness Programs</h4>
                        <p className="text-gray-700">Initiatives to support physical and mental wellbeing</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Flexible Work Arrangements</h4>
                        <p className="text-gray-700">Options for flexible scheduling where role permits</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-cbm-gray p-8">
                  <h3 className="mb-6 text-2xl font-bold text-cbm-navy">Growth & Development</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Professional Training</h4>
                        <p className="text-gray-700">Access to industry-specific training and development programs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Educational Assistance</h4>
                        <p className="text-gray-700">Support for continuing education and professional certifications</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Mentorship Programs</h4>
                        <p className="text-gray-700">Guidance from experienced professionals to accelerate career development</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Leadership Development</h4>
                        <p className="text-gray-700">Specialized training for employees with leadership potential</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Internal Advancement</h4>
                        <p className="text-gray-700">Opportunities for promotion and cross-functional experience</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-cbm-blue">✓</span>
                      <div>
                        <h4 className="font-semibold text-cbm-navy">Industry Conferences</h4>
                        <p className="text-gray-700">Attendance at relevant industry events and networking opportunities</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="bg-cbm-gray py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="inline-block relative text-3xl font-bold text-cbm-navy mb-4">
              <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-cbm-orange after:content-['']">
                Apply Now
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-700">
              Take the first step towards joining our team by submitting your application below.
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-cbm-navy">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-cbm-blue focus:outline-none focus:ring-1 focus:ring-cbm-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-cbm-navy">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-cbm-blue focus:outline-none focus:ring-1 focus:ring-cbm-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-cbm-navy">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-cbm-blue focus:outline-none focus:ring-1 focus:ring-cbm-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="position" className="mb-2 block text-sm font-medium text-cbm-navy">
                    Position Applied For*
                  </label>
                  <select
                    id="position"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-cbm-blue focus:outline-none focus:ring-1 focus:ring-cbm-blue"
                    required
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="experience" className="mb-2 block text-sm font-medium text-cbm-navy">
                  Relevant Experience*
                </label>
                <textarea
                  id="experience"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-cbm-blue focus:outline-none focus:ring-1 focus:ring-cbm-blue"
                  placeholder="Briefly describe your relevant experience for this position..."
                  required
                ></textarea>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-cbm-navy">
                  Upload Resume/CV*
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="resume"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PDF or DOC (MAX. 2MB)</p>
                    </div>
                    <input id="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" required />
                  </label>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="rounded bg-cbm-blue px-8 py-3 font-medium text-white transition hover:bg-cbm-navy"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Careers;
