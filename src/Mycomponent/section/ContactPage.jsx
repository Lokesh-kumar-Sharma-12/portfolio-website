import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name likhna jaruri hai.";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) tempErrors.email = "Sahi email dalein.";
    if (formData.message.length < 10) tempErrors.message = "Message thoda bada likhein.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: "Portfolio Contact",
    };

    emailjs.send(
      "service_vgta10g",
      "template_rb8lioh",
      templateParams,
      "dHINoTm_LWqsGCA92"
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setLoading(false);
        setStatus({ type: 'success', message: 'Message has been sent!' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setLoading(false);
        setStatus({ type: 'error', message: 'Message not being sent.' });
      });
  };

  return (
    // ... Baki pura code same rahega ...
    <div className="bg-gray-900 text-white flex items-center justify-center pt-16 min-h-screen" id="contact">
      {/* ... Same content ... */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">

        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-[#00FF88] mb-4">Let's Chat</h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind or just want to ask a question? Fill out the form or email me directly.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-900 rounded-full border border-[#00FF88] text-[#00FF88] shadow-[0_0_10px_#00ff88]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <a
                href="mailto:lokeshsharma9200@gmail.com"
                className="text-gray-300 break-all hover:text-white transition-colors duration-300"
              >
                lokeshsharma9200@gmail.com
              </a>                </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-900 rounded-full border border-[#00FF88] text-[#00FF88] shadow-[0_0_10px_#00ff88]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <a
                href="tel:+917976614077"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                +91 7976614077
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 ml-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/lokesh-kumar-sharma-a129692ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00ffcc] transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Lokesh-kumar-Sharma-12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00ffcc] transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#00FF88] opacity-10 blur-[50px]"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

            {/* Name Field */}
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                // Border color condition based on error
                className={`bg-gray-800 text-white px-4 py-3 rounded-lg border focus:outline-none transition-all duration-300 
                  ${errors.name ? 'border-red-500 shadow-[0_0_10px_red]' : 'border-gray-700 focus:border-[#00FF88] focus:shadow-[0_0_10px_#00ff88]'}`}
                placeholder="Ex. Lokesh Sharma"
              />
              {/* Error Message */}
              {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm mb-2">Email Address</label>
              <input
                type="text" // Type text rakha taki hum JS validation test kar sakein
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-gray-800 text-white px-4 py-3 rounded-lg border focus:outline-none transition-all duration-300 
                  ${errors.email ? 'border-red-500 shadow-[0_0_10px_red]' : 'border-gray-700 focus:border-[#00FF88] focus:shadow-[0_0_10px_#00ff88]'}`}
                placeholder="Ex. yourname@email.com"
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`bg-gray-800 text-white px-4 py-3 rounded-lg border focus:outline-none transition-all duration-300 resize-none 
                  ${errors.message ? 'border-red-500 shadow-[0_0_10px_red]' : 'border-gray-700 focus:border-[#00FF88] focus:shadow-[0_0_10px_#00ff88]'}`}
                placeholder="Type your message here..."
              ></textarea>
              {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
            </div>

            {/* Status Message Display */}
            {status.message && (
              <div className={`p-3 rounded text-sm text-center ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/50' : 'bg-red-500/10 text-red-400 border border-red-500/50'}`}>
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-bold uppercase tracking-widest transition-all duration-300 rounded-lg flex justify-center items-center gap-2
                ${loading
                  ? 'bg-gray-700 text-gray-400 border border-gray-600 cursor-not-allowed'
                  : 'bg-transparent text-[#00FF88] border border-[#00FF88] hover:bg-[#00FF88] hover:text-black hover:shadow-[0_0_20px_#00ff88]'
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;