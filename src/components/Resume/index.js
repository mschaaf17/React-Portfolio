import React, { useState } from "react";
import MadisonResume from '../../assets/images/Resume- Madison Schaaf (Updated 4_2022 tech).pdf';
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
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div class="border p-5">
      <h1>Learn more:</h1>
      <ul>
        {categories.map((category) => (
          <li
            className={`mx-1 ${
              currentCategory.name === category.name &&
              !contactSelected &&
              "navActive"
            }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
              }}
            >
              {category.name}
            </span>
          </li>
        ))}
      </ul>
      <Gallery currentCategory={currentCategory}></Gallery>
      <div>
        <a
          class="text-[white]"
          href={MadisonResume} download
        >
          Download my resume
        </a>{" "}
        Follow me on{" "}
        <a
          class="text-[#2563eb]"
          href="https://www.linkedin.com/in/madison-schaaf-b3b892102/"
          target="_blank"
        >
          LinkedIn{" "}
        </a>
      </div>
    </div>
  );
}

export default Resume;
