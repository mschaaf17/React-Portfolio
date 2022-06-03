import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
// import Gallery from "./components/Gallery";



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div className ="flex">
        {/* // TODO: Add a comment describing what we are passing as props */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* // TODO: Add a comment explaining what is happening on the following line */}
        {renderPage()}
      </div>
    );
  }
  




// function PortfolioContainer() {

//   const [currentPage, setCurrentPage] = useState('About')

//   const renderPage = () => {
//     if (currentPage === 'About') {
//       return <About/>
//     }
//     if (currentPage === 'Portfolio') {
//       return <Portfolio/>
//     }
//     if (currentPage === 'Contact') {
//       return <Contact/>
//     }
//   }
//   const handlePageChange = (page) => setCurrentPage(page)
  
//   // const [categories] = useState([
//   //   // { name: "About Me", description: "Feel free to learn more about me." },
//   //    { name: "Technical Skills", description:"HTML 5, CSS, Bootstrap, Tailwind Javascript, Node.js, MySQL, MongoDB, Mongoose, Express.Js, React.js, & Git", more: "" },
//   //   { name: "Education", description: "Full Stack Development | University of Utah | June 2022", more: "Master of Education, Special Education | University of Utah | December 2020", andMore: "Bachelor of Science, Psychology | University of Utah | May 2016 " },
//   // ]);

//   // const [currentCategory, setCurrentCategory] = useState(categories[0]);
//   // const [contactSelected, setContactSelected] =useState(false)
//   return (
//     <div class="flex">
//       <Nav currentPage= {currentPage} handlePageChange={handlePageChange}/>
//       {renderPage()}
//     </div>
//   );
// }

// export default PortfolioContainer;
