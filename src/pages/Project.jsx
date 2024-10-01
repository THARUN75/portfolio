import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import swiggy from '../assets/swiggy.jpg';
import elephant from '../assets/elephant.jpg';
import randomcolor from '../assets/randomcolor.jpg';
import stonepaperscissor from '../assets/stonepaperscissor.jpg';
import listitms from '../assets/listitms.jpg';
import settimeout1 from '../assets/settimeout1.jpeg';  

const Project = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center p-10 ${theme === "dark" ? "bg-black text-gray-100" : "bg-gray-50 text-gray-800"}`}>
      {/* Project-1 */}
      <div id='slide1' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src={swiggy}
              alt="Swiggy"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Swiggy Clone</h2>
            <p>Web Development</p>
            <div className="card-actions justify-end">
              <a href='https://swiggycss.netlify.app'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-2 */}
      <div id='slide2' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src={elephant}
              alt="Elephant Article"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Elephant Article</h2>
            <p>Website</p>
            <div className="card-actions justify-end">
              <a href='https://unique-cat-6d5f61.netlify.app'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-3 */}
      <div id='slide3' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src={randomcolor}
              alt="Random Color"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Random Color</h2>
            <p>Using JavaScript Only</p>
            <div className="card-actions justify-end">
              <a href='https://ramdomclr.netlify.app'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-4 */}
      <div id='slide4' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src={stonepaperscissor}
              alt="Stone Paper Scissor Game"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Stone Paper Scissor Game</h2>
            <p>Fun Game using JavaScript</p>
            <div className="card-actions justify-end">
              <a href='https://gamestonepaperscissor.netlify.app'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-5 */}
      <div id='slide5' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src={settimeout1}
              alt="Set Timeout"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Set Timeout</h2>
            <p>SetTimeout Using Class</p>
            <div className="card-actions justify-end">
              <a href='https://settimeoutusingclass.netlify.app'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-6 */}
      <div id='slide6' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src={listitms}
              alt="Add List Using Use State"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Add List Using UseState</h2>
            <p>Using React useState Hook</p>
            <div className="card-actions justify-end">
              <a href='https://addlistusingusestate.netlify.app'>
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
