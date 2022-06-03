import React, {useState} from 'react';
import Gallery from '../Gallery';

function Resume() {
    const [categories] = useState([
    // { name: "About Me", description: "Feel free to learn more about me." },
     { name: "Technical Skills", description:"HTML 5, CSS, Bootstrap, Tailwind Javascript, Node.js, MySQL, MongoDB, Mongoose, Express.Js, React.js, & Git", more: "" },
    { name: "Education", description: "Full Stack Development | University of Utah | June 2022", more: "Master of Education, Special Education | University of Utah | December 2020", andMore: "Bachelor of Science, Psychology | University of Utah | May 2016 " },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] =useState(false)
    return(
        <div class="border p-5">
        <h1>Review my resume here</h1>
        <Gallery />
        </div>

    )
}

export default Resume;