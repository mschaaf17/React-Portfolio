import React, {useEffect} from "react";
import selfImage from "../../assets/selfImage/self-photo.JPG";

function Nav({currentPage, handlePageChange}) {
  
    useEffect(() => {
      document.title = currentPage
    }, [currentPage])

  return (
    <header>
      <div class="flex-column py-3 m-3 text-center nav-section">
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
          <ul className="flex-row nav nav-tabs">
            <li className="mx-1 ">
              <a href="#about" 
              onClick={()=> handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              > 
                About me
              </a>
            </li>
            <li className={"mx-1 " + (currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link')}>
              <a href="#portfolio" 
                    onClick={()=> handlePageChange('Portfolio')}
                    
              > 
                Portfolio
              </a>
            </li>
            <li className='mx-1'>
            <a href='#resume'
             onClick={() => handlePageChange('Resume')}
                       className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}

            >
              Resume
            </a>
          </li>

          <li className='mx-1'>
            <a href='#contact'
             onClick={() => handlePageChange('Contact')}
                       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}

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
