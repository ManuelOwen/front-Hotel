import React, { useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [isOrderSent, setOrderSent] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setOrderSent(true);
  };

  const Order = () => {
    return (
      <div className='body'>
        <form onSubmit={handleFormSubmit} className='fill'>
          <input type='text' placeholder='enter drink' required></input>
          <input type='text' placeholder='enter food' required></input>
          <input type='text' placeholder='enter your Location' required></input>
          <input type='text' placeholder='enter your Name' required></input>
          <input type='tel' placeholder='enter your phone number' required></input>
          <button type='text' placeholder='Submit'>Order</button>
        </form>
      </div>
    );
  };

  return (
    <div className='order'>
      {isOrderSent && <p>order has been successfully made!</p>}
      <Order />
    </div>
  );
}
