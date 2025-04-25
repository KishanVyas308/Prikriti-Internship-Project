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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="inline-block relative text-3xl font-bold text-cbm-navy mb-4">
              <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-cbm-orange after:content-['']">
                About Prikriti
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-700">
              At Prikriti, we believe that every business—like nature—thrives through balance, rhythm, and the right conditions for growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-gray-700">
                Our name, inspired by the essence of “prakriti” (meaning nature or original essence), reflects our core philosophy: true progress stems from understanding the natural flow of business ecosystems.
              </p>
              <p className="mb-4 text-gray-700">
                We are not just advisors — we are growth architects. With a deep understanding of global trade dynamics, emerging markets, and cross-border strategies, Prikriti offers tailored guidance for businesses looking to expand, evolve, and export with purpose.
              </p>
              <p className="text-gray-700">
                Just as nature adapts, innovates, and sustains — so do we. Whether you’re entering new markets, optimizing supply chains, or navigating complex regulations, Prikriti brings clarity, creativity, and strategy to the table.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Prikriti's philosophy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="relative mb-6 text-3xl font-bold text-cbm-navy">
              <span className="relative z-10 pr-4 after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-12 after:-translate-y-1/2 after:bg-cbm-orange after:content-['']">
                What We Stand For
              </span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-cbm-orange">🌱</div>
                <h3 className="text-xl font-bold text-cbm-navy mb-2">Sustainability in Strategy</h3>
                <p className="text-gray-700">
                  Long-term, purpose-driven growth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-cbm-orange">🌍</div>
                <h3 className="text-xl font-bold text-cbm-navy mb-2">Global Perspective, Local Sensibility</h3>
                <p className="text-gray-700">
                  We bridge borders with insight.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-cbm-orange">🔗</div>
                <h3 className="text-xl font-bold text-cbm-navy mb-2">Natural Alignment</h3>
                <p className="text-gray-700">
                  Business advice that feels intuitive, effective, and uniquely yours.
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
