import React, { useState } from "react";
import MadisonResume from '../../assets/images/Resume- Madison Schaaf (Updated 4_2022 tech).pdf';
import linkedInIcon from '../../assets/images/linkedin-icon.gif';
// import frozenlinkedIn from '../../assets/images/frozen-linkedin.PNG'
import facebookIcon from '../../assets/images/facebook-icon.gif'
import Gallery from "../Gallery";

function Resume() {
  const [categories] = useState([
    {
      name: "Technical Skills",
      description:
        "HTML 5, CSS, Bootstrap, Tailwind Javascript, Node.js, MySQL, MongoDB, Mongoose, Express.Js, React.js, & Git",
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
    <h1 class="pl-2">Learn more:</h1>
    <ul class="pl-5 py-2 ">
        {categories.map((category) => (
          <li
            className={`mx-1 ${
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
          </li>
        ))}
      </ul>
    <div class="py-5 mx-5">
      
      
      <Gallery currentCategory={currentCategory}></Gallery>
      
    </div>
    <div>
    <a
          class="text-[white] flex pr-1"
          href={MadisonResume} download
        >
          Download resume 💾
        </a>{" "}
    </div>

    <div class='follow'>
        {/* <a
          class="text-[white] flex pr-1"
          href={MadisonResume} download
        >
          Download resume 💾
        </a>{" "} */}


        Follow me:{" "}
        <a
          href="https://www.linkedin.com/in/madison-schaaf-b3b892102/"
          target="_blank"
        >
          <img className='icon pr-1'src={linkedInIcon} alt="linkedIn logo"/>
          
        </a>
        <a
          href="https://www.facebook.com/people/Maddy-Schaaf/100072535338867/"
          target="_blank"
        >
          <img className='icon'src={facebookIcon} alt="facebook logo"/>
        </a>
      </div>
    </div>
  );
}

export default Resume;
