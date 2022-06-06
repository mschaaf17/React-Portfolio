import React, {useEffect} from "react";
import selfImage from "../../assets/selfImage/self-photo.JPG";

function Nav({currentPage, handlePageChange}) {
  
    useEffect(() => {
      document.title = currentPage
    }, [currentPage])

  return (
    <header>
      <div class="nav-section">
        <h2 className="font-bold text-[20px] pl-1">
          <a data-testid="link" href="/">
            Madison's Portfolio
          </a>
        </h2>
        <img
          src={selfImage}
          className="my-2" class="self"
          style={{ width: "80%", height: "30%" }}
          alt="self"
        />
        <nav>
          <ul className="nav nav-tabs">
          <li className={"m-1 " + (currentPage === 'About' ? 'nav-link active' : 'nav-link')}>
              <a href="#about" 
              onClick={()=> handlePageChange('About')}
              > 
                About me
              </a>
            </li>
            <li className={"m-1 " + (currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link')}>
              <a href="#portfolio" 
                    onClick={()=> handlePageChange('Portfolio')}
                    
              > 
                Portfolio
              </a>
            </li>
            <li className={"m-1 " + (currentPage === 'Resume' ? 'nav-link active' : 'nav-link')}>
            <a href='#resume'
             onClick={() => handlePageChange('Resume')}

            >
              Resume
            </a>
          </li>

          <li className={"m-1 " + (currentPage === 'Contact' ? 'nav-link active' : 'nav-link')}>
            <a href='#contact'
             onClick={() => handlePageChange('Contact')}

            >
              Contact
            </a>
          </li>
          
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
