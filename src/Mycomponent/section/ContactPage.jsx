import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // 1. Import EmailJS

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  // Form Data State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name likhna jaruri hai.";
      isValid = false;
    } else if (formData.name.length < 3) {
      tempErrors.name = "Name kam se kam 3 letters ka hona chahiye.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email likhna jaruri hai.";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      tempErrors.email = "Please ek valid email address likhein.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message khali nahi chhod sakte.";
      isValid = false;
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message thoda detail mein likhein (min 10 chars).";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // 4. Submit Handler (UPDATED FOR EMAILJS)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setLoading(true);
      setStatus({ type: '', message: '' });

      // Apne EmailJS keys yahan dalein
      const serviceId = "service_vgta10g";      // EmailJS se copy karein
      const templateId = "template_rb8lioh";    // EmailJS se copy karein
      const publicKey = "dHINoTm_LWqsGCA92";      // EmailJS se copy karein

      // Template params (jo naam aapne EmailJS template mein {{variable}} banaye hain)
      const templateParams = {
        name: formData.name,       // Ab ye {{name}} se match karega
        email: formData.email,     // Ab ye {{email}} se match karega (Reply To ke liye)
        message: formData.message, // Ye pehle se sahi tha
        title: "New Query",        // Subject line ke liye (kyunki screenshot me {{title}} hai)
      };

      // Real Email Send Logic
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setLoading(false);
          setStatus({ type: 'success', message: 'Message successfully sent! I will contact you soon.' });
          setFormData({ name: '', email: '', message: '' }); // Form clear
        })
        .catch((err) => {
          console.log('FAILED...', err);
          setLoading(false);
          setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        });

    } else {
      setStatus({ type: 'error', message: 'Please form mein errors check karein.' });
    }
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
              <span className="text-gray-300 break-all">lokeshsharma9200@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-900 rounded-full border border-[#00FF88] text-[#00FF88] shadow-[0_0_10px_#00ff88]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-gray-300">+91 7976614077</span>
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