import React, { useState } from 'react';
import './Rooms.css';

export default function Rooms() {
  const [isBookingMade, setIsBookingMade] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsBookingMade(true);
  };

  const book = () => {
    return (
      <div className='room'>
        <div className='req'>
          <h1>Book an Accommodation with us</h1>
          <form className='fill' onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Enter your Name' required />
            <input type="tel" placeholder='Enter your Phone number' required />
            <input type="email" placeholder='Enter your email' required />
            <input type="date" placeholder='Enter date from' required />
            {/* <input type="date" placeholder='Enter date to' /> */}
            <button type='submit'>Book Now</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className='book'>
      {isBookingMade && <p>Accommodation booked successfully!!</p>}
      {book()}
    </div>
  );
}
