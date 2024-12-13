import React, { useState } from 'react';
import strength from './assets/strength.jpg';
import mobility from './assets/mobility.jpg';
import drill from './assets/drill.jpg';
import { IoIosArrowDroprightCircle } from "react-icons/io";

const App = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="screen">


      <div className="container">

        <div
          className={`img-box ${expandedIndex===0 ? 'expanded': '' } `}
          onMouseEnter={() => { setExpandedIndex(0) }}>
          <img src={strength} alt="Strength" className="image" />
          <div className='text' >STRENGTH</div>
          <IoIosArrowDroprightCircle className='arrow' />
        </div>

        <div className={`img-box ${expandedIndex===1 ? 'expanded': '' } `}
          onMouseEnter={() => { setExpandedIndex(1) }}>
          <img src={mobility} alt="Mobility" className="image" />
          <div className='text'>MOBILITY</div>
          <IoIosArrowDroprightCircle className='arrow' />
        </div>

        <div className={`img-box ${expandedIndex===2 ? 'expanded': '' } `}
          onMouseEnter={() => { setExpandedIndex(2) }}>
          <img src={drill} alt="Drill" className="image" />
          <div className='text'>DRILLS</div>
          <IoIosArrowDroprightCircle className='arrow' />
        </div>
      </div>
    </div>
  );
};

export default App;
