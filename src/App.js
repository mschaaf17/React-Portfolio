import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
// import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  const [categories] = useState([
    // { name: "About Me", description: "Feel free to learn more about me." },
    { name: "Portfolio", description: "Examples of projects" },
    { name: "Resume", description: "recent work experience" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div class="flex">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Contact></Contact>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
