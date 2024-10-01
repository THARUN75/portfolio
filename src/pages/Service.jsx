import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Service.css'; // Ensure this file exists and is correctly linked

const Service = () => {
  const { theme } = useContext(ThemeContext); // Get the theme from context

  return (
    <div>
      <section
        className={`services section ${
          theme === 'dark' ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-800'
        } py-12`}
        id="services"
      >
        <div className="max-w-7xl mx-auto px-4">
          <span
            className={`text-lg block text-center mb-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            What I Offer
          </span>
          <h2 className="text-3xl font-bold text-center mb-12">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Front End Development */}
            <div
              className={`p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl ${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <i className="fa-brands fa-react text-4xl text-blue-600 mb-4 rotate-icon"></i>
              <h3 className="text-2xl font-semibold mb-2">
                Front End Development
              </h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Creative Frontend Developer with strong skills in HTML, CSS, and JavaScript. Experienced in building responsive, user-friendly interfaces using frameworks like Bootstrap and React.
              </p>
            </div>

            {/* Web Development */}
            <div
              className={`p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl ${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <i className="bx bx-laptop text-4xl text-green-500 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Skilled Web Developer with expertise in both frontend and backend technologies. Committed to building responsive, efficient, and user-friendly websites and applications with a focus on seamless functionality.
              </p>
            </div>

            {/* Back End Development */}
            <div
              className={`p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl ${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <i className="fa-solid fa-server text-4xl text-red-500 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-2">Back End Development</h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Proficient in HTML, CSS, JavaScript, React, and Bootstrap for seamless UI, as well as Node.js, Java, PHP, and SQL/MongoDB for robust backend solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
