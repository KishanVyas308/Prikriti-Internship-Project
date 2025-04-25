import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    // Show success message (could implement a toast notification here)
    alert("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="inline-block relative text-3xl font-bold text-cbm-navy mb-4">
            <span className="relative z-10 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-cbm-orange after:content-['']">
              Contact Us
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            Get in touch with our team to discuss your project requirements or to learn more about our services.
          </p>
        </div>

        <div className="flex flex-col items-start gap-12 lg:flex-row">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="rounded-lg bg-cbm-gray p-8">
              <h3 className="mb-6 text-xl font-bold text-cbm-navy">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="mr-4 text-2xl">📍</span>
                  <div>
                    <h4 className="text-lg font-semibold text-cbm-navy">Rajkot Office</h4>
                    <address className="not-italic text-gray-700">
                      905-906-907, A-Wing, 9th Floor, RK Iconic, Sheetal Park,
                      <br />
                      Rajkot, Gujarat 360006
                    </address>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-4 text-2xl">📍</span>
                  <div>
                    <h4 className="text-lg font-semibold text-cbm-navy">Morbi Office</h4>
                    <address className="not-italic text-gray-700">
                      201, Ishan Business Center (IBC), 8A National Highway,
                      <br />
                      Nr. Omkar Petroleum, Morbi - 363642
                    </address>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-4 text-2xl">📞</span>
                  <div>
                    <h4 className="text-lg font-semibold text-cbm-navy">Phone</h4>
                    <p className="text-gray-700">+91 2234567890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-4 text-2xl">✉️</span>
                  <div>
                    <h4 className="text-lg font-semibold text-cbm-navy">Email</h4>
                    <a href="mailto:info@prikriti.co.in" className="text-cbm-blue hover:underline">
                      info@prikriti.co.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-4 text-2xl">🕒</span>
                  <div>
                    <h4 className="text-lg font-semibold text-cbm-navy">Working Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-cbm-navy">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-cbm-blue focus:outline-none focus:ring-1 focus:ring-cbm-blue"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-cbm-navy">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-cbm-blue focus:outline-none focus:ring-1 focus:ring-cbm-blue"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-cbm-navy">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-cbm-blue focus:outline-none focus:ring-1 focus:ring-cbm-blue"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-cbm-navy">
                    Subject*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-cbm-blue focus:outline-none focus:ring-1 focus:ring-cbm-blue"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Consultation">Project Consultation</option>
                    <option value="Career Opportunities">Career Opportunities</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-cbm-navy">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-cbm-blue focus:outline-none focus:ring-1 focus:ring-cbm-blue"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="rounded-md bg-cbm-blue px-6 py-3 font-medium text-white transition hover:bg-cbm-navy"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
