import React, { useState, useContext } from 'react';
import 'boxicons/css/boxicons.min.css';
import emailjs from 'emailjs-com'; // Import EmailJS
import { ThemeContext } from '../components/ThemeContext'; // Import ThemeContext

const Contact = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  // State for form inputs
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    phone: '',
    message: '',
  });

  // State for form feedback message
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission and email sending
  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    if (Object.values(form).some(field => field === '')) {
      setFeedbackMessage('Please fill all the input fields 📩');
      return;
    }

    // EmailJS send form
    emailjs.sendForm(
      'service_xoayi2e  ',  // Replace with your service ID
      'template_vaz7o53', // Replace with your template ID
      e.target,           // Form element
      'mzO0cEvygt3s8JpID' // Replace with your public key
    )
    .then(() => {
      // Success: Show message and clear form
      console.log(form)
      setFeedbackMessage('Message sent ✅');
      setForm({
        name: '',
        email: '',
        project: '',
        phone: '',
        message: '',
      });

      // Clear the message after 5 seconds
      setTimeout(() => {
        setFeedbackMessage('');
      }, 5000);
    })
    .catch((error) => {
      // Failure: Show error message
      setFeedbackMessage('Oops! Something went wrong...');
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <section className={`contact section py-12 ${theme === "dark" ? "bg-black text-white" : "bg-neutral-300 text-gray-800"}`} id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <span className={`block text-lg text-center mb-4`}>For Projects</span>
          <h2 className={`text-3xl font-bold text-center mb-12`}>Contact Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Section */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <i className="bx bx-home text-3xl text-blue-600"></i>
                <div>
                  <h3 className={`text-xl font-semibold`}>Location</h3>
                  <span>{theme === "dark" ? "Coimbatore" : "Coimbatore"}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="bx bx-phone text-3xl text-green-600"></i>
                <div>
                  <h3 className={`text-xl font-semibold`}>Phone</h3>
                  <span>9361275569</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="bx bx-envelope text-3xl text-red-600"></i>
                <div>
                  <h3 className={`text-xl font-semibold`}>Gmail</h3>
                  <span>tharunnaveen199@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <form className="space-y-6" id="contact-form" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  required
                  placeholder="Project"
                  className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                />
                <input
                  type="number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className={`w-full h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Submit <i className="ri-arrow-right-up-line ml-2"></i>
              </button>

              {/* Display Feedback Message */}
              {feedbackMessage && (
                <p className={`text-center mt-4 ${feedbackMessage.includes('✅') ? 'text-blue-600' : 'text-red-600'}`}>
                  {feedbackMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
