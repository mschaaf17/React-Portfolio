import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
          return <Resume />
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div className="background">
        <div  className ="flex-section">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        </div>
          <footer className ='flex justify-between px-5 text-white footer'>
          <h5>
          ❤️ Made with love by Madison Schaaf </h5>
          <div>
              &copy; 2022 Madison Schaaf, Portfolios
          </div>
      </footer>
      </div>
    );
  }

