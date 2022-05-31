import React from "react";
import selfImage from "../../assets/selfImage/self-photo.JPG";

function Nav() {
    const categories =[
        {name: 'About Me', description:'information about me'},
        {name: 'Portfolio', description: 'Examples of projects'},
        {name: 'Resume', description:'recent work experience'}
    ];
    const handleClick =() => {
        console.log("click handled")
    }
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
              <a href="#about" onClick={() => handleClick()}> 
                About me
              </a>
            </li>
            <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                    {category.name}
                </span>
              </li>
            ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
