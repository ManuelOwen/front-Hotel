import React from 'react';
import backgroundImage from '../assets/Images/kibet.jpg';
import './Home.css';

const Home = () => {
  return (
    
    <div className="Home-container">
     
          <div className='bg' style={{ backgroundImage: `url(${backgroundImage})` }}></div> 

          <div className="about">
            To the very epitome of luxury, our brand is passionate about creating, crafting rich, meaningful, and memorable
            experiences for every guest.
          </div>
           <div className="menu">
            <h1>Super delicious meals</h1>
            Where our sweetness meets your satisfaction
          </div>
          <div className="accomodation">
             <h1>Find your next stay</h1>
            Search low prices on hotels, homes, and much more...
           </div>
          <div className="location">
             Our hotel is located in the beautiful city of Nairobi, next to the iconic KICC
          </div>
        <div className="auther"></div>
      
    </div>
  );
};

export default Home;
