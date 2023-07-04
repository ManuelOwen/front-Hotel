import React, { useState } from 'react';
import './contact.css';

export default function Contacts() {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMessageSent(true);
  };

  const Message = () => {
    return (
      <div>
        <form onSubmit={handleFormSubmit} className='form'>
          <input type="text" placeholder='Enter your full names' required />
          <input type="tel" placeholder='Enter your Telephone number' required />
          <input type="text" placeholder='Enter your welcome tag' required />
          <input type="text" placeholder='Enter date' required />
          <input type="text" placeholder='served by' required />
          <textarea name="" placeholder='input your message' required></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };

  return (
    <div className='contact'>
      {isMessageSent && <p>Message has been successfully sent!</p>}
      <Message />
    </div>
  );
}
