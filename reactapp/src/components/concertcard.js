import React, { useState } from 'react';
import './concertcard.css';

const Eventcard = () => {
  const [tickets, setTickets] = useState([0, 0, 0]);

  const handleIncrement = (index) => {
    const updatedTickets = [...tickets];
    updatedTickets[index]++;
    setTickets(updatedTickets);
  };

  const handleDecrement = (index) => {
    const updatedTickets = [...tickets];
    if (updatedTickets[index] > 0) {
      updatedTickets[index]--;
      setTickets(updatedTickets);
    }
  };

  return (
    <div className="event-booking-page">
      <h1>select the zone </h1>
      <div className="card-container">
        <div className="card-con">
          {/* <img
            src="event1.jpg"
            alt="SILVER ZONE"
            className="event-image"
          /> */}
          <div className="event-details">
            <h2>SILVER</h2>
            <p id='p-css'>RS 500</p>
            <div className="counter">
              <button
                onClick={() => handleDecrement(0)}
                className="counter-button"
              >
                -
              </button>
              <span className="counter-value">{tickets[0]}</span>
              <button
                onClick={() => handleIncrement(0)}
                className="counter-button"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="card-con">
          {/* <img
            src="event2.jpg"
            alt="GOLD ZONE"
            className="event-image"
          /> */}
          <div className="event-details">
            <h2>GOLD</h2>
            <p id='p-css'>RS 1000</p>
            <div className="counter">
              <button
                onClick={() => handleDecrement(1)}
                className="counter-button"
              >
                -
              </button>
              <span className="counter-value">{tickets[1]}</span>
              <button
                onClick={() => handleIncrement(1)}
                className="counter-button"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="card-con">
          {/* <img
            src="event3.jpg"
            alt="Premium ZONE"
            className="event-image"
          /> */}
          <div className="event-details">
            <h2>PREMIUM</h2>
            <p id='p-css'>RS 1500</p>
            <div className="counter">
              <button
                onClick={() => handleDecrement(2)}
                className="counter-button"
              >
                -
              </button>
              <span className="counter-value">{tickets[2]}</span>
              <button
                onClick={() => handleIncrement(2)}
                className="counter-button"
              >
                +
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <div className='block-2'>
      <div className="card-con">
          {/* <img
            src="event1.jpg"
            alt="SILVER ZONE"
            className="event-image"
          /> */}
          <div className="event-details">
            <h2>ELITE(VIP)</h2>
            <p id='p-css'>RS 2000</p>
            <div className="counter">
              <button
                onClick={() => handleDecrement(0)}
                className="counter-button"
              >
                -
              </button>
              <span className="counter-value">{tickets[0]}</span>
              <button
                onClick={() => handleIncrement(0)}
                className="counter-button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventcard;
