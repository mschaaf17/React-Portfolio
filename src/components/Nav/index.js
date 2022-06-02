import React from "react";
import { Link } from 'react-router-dom';
import selfImage from "../../assets/selfImage/self-photo.JPG";

function Nav() {

  return (
    <header>
      <div class="p-5">
        <h2 className="font-bold">
          <a data-testid="link" href="/">
            Madison's Portfolio
          </a>
        </h2>
        <img
          src={selfImage}
          className="my-2"
          style={{ width: "20%", height: "20%" }}
          alt="self"
        />
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <Link to='/about'>About Me</Link>
            </li>
            <li className="mx-2">
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            
            <li className="mx-2">
              <Link to='/resume'>Resume</Link>
            </li>
            <li className="mx-2">
              <Link to='/contact'>Contact Me</Link>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
