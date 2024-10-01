import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext'; // Import ThemeContext
import "./About.css";
import man from "../assets/man.avif";

const About = () => {
  const { theme } = useContext(ThemeContext); // Get the theme from context

  return (
    <div className={`m-auto ${theme === "dark" ? "bg-black text-gray-100" : "bg-gray-50 text-gray-800"}`}>
      <section className="about section container mx-auto py-12" id="about">
        <h2 className="text-4xl font-bold mb-8">About me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="about__data space-y-4">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-2xl">Hello, I am <br /></span>
              Motivated and passionate MERN stack developer with a strong understanding of MongoDB, Express.js, React.js, and Node.js. Recently completed a degree in Computer Science, where I honed my skills in full-stack web development through hands-on projects. Experienced in building responsive and user-friendly web applications, with a keen eye for design and functionality. Adept at collaborating with cross-functional teams and eager to learn and adapt in a fast-paced environment. Looking for an opportunity to leverage my skills in a dynamic team and contribute to innovative software solutions.
            </p>
          </div>

          <img
            src={man}
            alt="Tharun"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Qualification Section */}
      <section className="qualification container mx-auto py-12">
        <span className="font-bold text-lg">Experience and education</span>
        <h2 className="text-4xl font-bold mb-8">Qualification</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="qualification__content">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <i className='bx bx-book-bookmark mr-2'></i> Education
            </h2>

            <div className="space-y-6">
              <div className="qualification__data">
                <h3 className="text-xl font-medium">MERN Stack Development</h3>
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <i className='bx bx-book-alt mr-2'></i> KG Micro College
                  </span>
                  <span className="flex items-center">
                    <i className='bx bx-calendar-alt mr-2'></i> May 2024 - Dec 2024
                  </span>
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="text-xl font-medium">BE-Computer Science And Engineering</h3>
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <i className='bx bx-book-alt mr-2'></i> S A Engineering College - Chennai
                  </span>
                  <span className="flex items-center">
                    <i className='bx bx-calendar-alt mr-2'></i> Jun 2019 - Apr 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
