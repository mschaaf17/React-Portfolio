import React, { useState } from "react";
import MadisonResume from '../../assets/images/Resume- Madison Schaaf (Updated 7_22).pdf';
import linkedInIcon from '../../assets/images/linkedin-icon.gif';
import facebookIcon from '../../assets/images/facebook-icon.gif'
import github from '../../assets/images/github.jpeg'
import Gallery from "../Gallery";

function Resume() {
  const [categories] = useState([
    {
      name: "Technical Skills",
      description:
        "HTML 5, CSS, Bootstrap, Tailwind, Bulma, Javascript, Node.js, MySQL, Sequelize, Handlebars, MongoDB, Mongoose, Express, React, Git, & various npm packages",
      more: "",
    },
    {
      name: "Education",
      description: "Full Stack Development | University of Utah | June 2022",
      more: "Master of Education, Special Education | University of Utah | December 2020",
      andMore:
        "Bachelor of Science, Psychology | University of Utah | May 2016 ",
    },
    {
      name: "Work Experience",
      description: "Educator",
      more: "Enrollment Counselor",
      andMore: "Building Supervisor/Tennis Program Manager",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div class="info-container">
    <h1 class="pl-2 heading-text">Click to learn more:</h1>
    <ul class="pl-5 py-2 text-[20px]">
        {categories.map((category) => (
          <button
            className={`mx-2 btn ${
              currentCategory.name === category.name &&
              "navActive"
            }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
               
              }}
            >
              {category.name}
            </span>
          </button>
        ))}
      </ul>
    <div class="py-5 mx-5">
      
      
      <Gallery currentCategory={currentCategory}></Gallery>
      
    </div>
    <div>
    <a id="resume" 
          class="text-[#e0f2fe] flex pr-1 download-resume"
          href={MadisonResume} download
        >
          Download resume 💾
        </a>{" "}
    </div>

    <div class='follow'>

        <a
          href="https://www.linkedin.com/in/madison-schaaf-b3b892102/"
          target="_blank"
        >
          <img className='icon pr-1'src={linkedInIcon} alt="linkedIn logo"/>
          
        </a>
        <a
          href="https://github.com/mschaaf17"
          target="_blank"
        >
          <img className='facebook animation'src={github} alt="githu logo"/>
        </a>
        <a
          href="https://www.facebook.com/people/Maddy-Schaaf/100072535338867/"
          target="_blank"
        >
          <img className='icon'src={facebookIcon} alt="facebook logo"/>
        </a>
      </div>
      <a href="#Nav" class="text-indigo-200 back-to-nav">Back to Navigation</a>
    </div>
  );
}

export default Resume;
