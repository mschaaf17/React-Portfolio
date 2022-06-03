import React, {useEffect} from "react";
import selfImage from "../../assets/selfImage/self-photo.JPG";

function Nav(props) {
    const {
      categories = [],
      setCurrentCategory,
      contactSelected,
      currentCategory,
      setContactSelected,
      
    } = props
  
    useEffect(() => {
      document.title = currentCategory.name
    }, [currentCategory])

  return (
    <header>
      <div class="flex-column px-5 py-3 m-3 text-center border rounded nav-section">
        <h2 className="font-bold text-[20px] pl-1">
          <a data-testid="link" href="/">
            Madison's Portfolio
          </a>
        </h2>
        <img
          src={selfImage}
          className="my-2" class="self"
          // style={{ width: "80%", height: "30%" }}
          alt="self"
        />
        <nav>
          <ul className="flex-row">
            <li className="mx-1">
              <a href="#about" 
              onClick={()=> setContactSelected(false)}
              > 
                About me
              </a>
            </li>
            <li className="mx-1">
              <a href="#portfolio" 
              onClick={()=> setContactSelected(false)}
              > 
                Portfolio
              </a>
            </li>
            <li className={`mx-1 ${contactSelected && 'navActive'}`}>
            <span 
             onClick={() => setContactSelected(true)}
            >
              Contact
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                  setContactSelected(false)
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
