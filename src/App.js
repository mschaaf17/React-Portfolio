import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  const [categories] = useState([
    // { name: "About Me", description: "Feel free to learn more about me." },
    { name: "Portfolio", description: "Examples of projects" },
    { name: "Resume", description: "recent work experience" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] =useState(false)
  return (
    <div class="flex">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main class="flex">
        
        {!contactSelected ? (
          <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
