import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
              <p className="mt-4 text-xl text-white/90">Get in touch to discuss your project requirements</p>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />

      {/* Map Section */}
      <section className="py-16 bg-cbm-gray">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="inline-block relative text-3xl font-bold text-cbm-navy mb-4">
              <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-cbm-orange after:content-['']">
                Our Locations
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-700">
              Visit our offices to meet with our team and discuss your business needs in person.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-cbm-navy">Rajkot Office</h3>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30181.03834167366!2d70.74709624216666!3d22.318504755422104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9ebb58c4579%3A0x78530cb0edf1cfb0!2sRK%20Iconic!5e1!3m2!1sen!2sin!4v1745901414669!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rajkot Office Location"></iframe>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-cbm-navy">Morbi Office</h3>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30072.722269403028!2d70.8503491929556!3d22.814198540431914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d77537d5241%3A0x885fbb57aefb9a11!2sIshan%20business%20centre!5e1!3m2!1sen!2sin!4v1745901524405!5m2!1sen!2sin" width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Morbi Office Location"></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
