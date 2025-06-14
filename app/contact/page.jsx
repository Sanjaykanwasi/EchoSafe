"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log("Form submitted:", formData);
  //   alert("Thank you for your message! I'll get back to you soon.");
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Hero Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16 sm:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Have a question about Echo Safe? Want to collaborate on a project?
            Or just want to say hello? I'd love to hear from you. Drop me a
            message and I'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg blur"></div>
              <div className="relative bg-gray-900 p-8 rounded-lg border border-gray-700">
                <form action="https://formspree.io/f/mzzgeeqk" method="POST">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Send Me a Message
                  </h2>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          // value={formData.name}
                          // onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          // value={formData.email}
                          // onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        // value={formData.subject}
                        // onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        // value={formData.message}
                        // onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell me more about your project, question, or just say hello..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always excited to discuss new ideas, collaborate on
                  projects, or help with any questions you might have about Echo
                  Safe. Choose your preferred way to reach out!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors duration-200">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-gray-400">sanjaykanwasi3@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors duration-200">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-gray-400">+91 9761709516</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors duration-200">
                  <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-gray-400">Roorkee, Uttarakhand</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Sanjaykanwasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-200 group"
                  >
                    <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sanjay-singh-kanwasi-057177200/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-200 group"
                  >
                    <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white" />
                  </a>
                  <a
                    href="https://portfolio-react-sanjay.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-200 group"
                  >
                    <Globe className="w-6 h-6 text-gray-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                How quickly do you respond to messages?
              </h3>
              <p className="text-gray-300">
                I typically respond within 24-48 hours. For urgent matters,
                please mention it in your subject line.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you offer custom development services?
              </h3>
              <p className="text-gray-300">
                Yes! I'm available for freelance projects and consulting. Let's
                discuss your requirements and see how I can help.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I contribute to Echo Safe?
              </h3>
              <p className="text-gray-300">
                Absolutely! Echo Safe is open source. Check out the GitHub
                repository and feel free to submit pull requests or report
                issues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
