import React from 'react';
import './TheaterList.css';
import { Link } from 'react-router-dom';

const TheaterList = () => {
  const theaters = [
    { name: 'Theater A', timings: ['10:00 AM', '2:00 PM', '6:00 PM'] },
    { name: 'Theater B', timings: ['11:00 AM', '3:00 PM', '7:00 PM'] },
    { name: 'Theater C', timings: ['12:00 PM', '4:00 PM', '8:00 PM'] },
    { name: 'Theater D', timings: ['9:00 AM', '1:00 PM', '5:00 PM'] },
    { name: 'Theater E', timings: ['10:30 AM', '3:30 PM', '7:30 PM'] },
  ];

  return (
    <div className='th-page'>
    <div className="theater-list">
      {theaters.map((theater, index) => (
        <div className="theater" key={index}>
          <h3>{theater.name}</h3>
          <ul className="timings-list" id='fl'>
            {theater.timings.map((timing, index) => (
                <li key={index}>
                    
                  <Link to='/payment'>
                <button className="timing-btn">{timing}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TheaterList;
