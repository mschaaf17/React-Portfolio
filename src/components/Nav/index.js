import React, {useEffect} from "react";
import selfImage from "../../assets/selfImage/self-photo.JPG";

function Nav(props) {
    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
    } = props
  
    useEffect(() => {
      document.title = currentCategory.name
    }, [currentCategory])

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
              <a href="#about" 
              // onClick={()=> setContactSelected(false)}
              > 
                About me
              </a>
            </li>
            <li className={"mx-2"}>
            <span 
            // onClick={() => setContactSelected(true)}
            >
              Contact
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                  // setContactSelected(false)
                }}
              >
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
