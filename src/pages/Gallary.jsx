// import gallary1 from '../images/'
// import gallary2 from '../images/20230824_114316.jpg'
// import gallary3 from '../images/20230824_114437.jpg'
// import gallary4 from '../images/20230824_114421.jpg'
// import "./gallary.css"
// import React, { useState } from "react";
// import Img from '../images/carrer.jpg'
// import Banner from '../component/ui/Banner'

import MainAchieve from "./MainAchieve";

// import React from 'react';     
function Gallary() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };
  return (
    <>
    <Banner
        imageUrl={Img}
        breadcrumb='Home > Carrer'
        headline='Gallary'
      />{' '}
      {/* start career */}
      {/* <div className='careerbag'>
             <h2>
             <nav>
                <a href="/Home"></a><p>Home Shape your Career with us</p>
            </nav>Shape your Career with us</h2>
        </div> */}
     {/* <div className='hedding'> <h2>Gallary</h2></div> */}
      {/* <div className='gallary'> 
        <div className='gsub'>
          <img src={gallary1} alt=""/>
        </div>
        <div className='gsub'>
          <img src={gallary2} alt=""/>
        </div>
        <div className='gsub'>
          <img src={gallary3} alt=""/>
        </div>
        <div className='gsub'>
          <img src={gallary4} alt=""/>
        </div>
      </div>
      <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown}>
                Show Images
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <img src={gallary1} alt="Employee 2" className="dropdown-image" />
                    <img src={gallary2} alt="Employee 3" className="dropdown-image" />
                    <img src={gallary2} alt="Employee 4" className="dropdown-image" />
                    <img src={gallary4} alt="Employee 6" className="dropdown-image" />
                </div>
            )}
        </div> */}
        {/* <MainAchieve/> */}
    </>
  )
};

export default Gallary;
