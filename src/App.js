import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {

  const [currentPage, setCurrentPage] = useState('About')

  const renderPage = () => {
    if (currentPage === "About") {
      return <About/>
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio/>
    }
    if (currentPage === 'Contact') {
      return <Contact/>
    }
  }
  const handlePageChange = (page) => setCurrentPage(page)
  
  // const [categories] = useState([
  //   // { name: "About Me", description: "Feel free to learn more about me." },
  //    { name: "Technical Skills", description:"HTML 5, CSS, Bootstrap, Tailwind Javascript, Node.js, MySQL, MongoDB, Mongoose, Express.Js, React.js, & Git", more: "" },
  //   { name: "Education", description: "Full Stack Development | University of Utah | June 2022", more: "Master of Education, Special Education | University of Utah | December 2020", andMore: "Bachelor of Science, Psychology | University of Utah | May 2016 " },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // const [contactSelected, setContactSelected] =useState(false)
  return (
    <div class="flex">
      <Nav currentPage= {currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}

export default App;
