import React, { useState, useEffect } from 'react';
import './Remainder.css';
import remainImg from './remainImg.jpg';

const WateringRemainder = () => {
  const [lastWateredDate, setLastWateredDate] = useState(null);
  const [nextWateringDate, setNextWateringDate] = useState(null);

  useEffect(() => {
    if (lastWateredDate) {
      const nextDate = new Date(lastWateredDate);
      nextDate.setDate(nextDate.getDate() + 7); // Set next watering date after 7 days
      setNextWateringDate(nextDate.toDateString());
    }
  }, [lastWateredDate]);

  const handleWaterPlant = () => {
    const currentDate = new Date();
    setLastWateredDate(currentDate.toDateString());
  };

  return (
    <div className='remainder-container'>
     
      {/* <center> 
    <img src={remainImg} width={800} height={600}></img>
        </center> */}
      {lastWateredDate ? (

        <div className='water-reminder'>
           <h2>Plant Watering Remainder</h2>
          <p>Last watered: {lastWateredDate}</p>
          <p>Next watering: {nextWateringDate}</p>
          <button onClick={handleWaterPlant}>Water Plant</button>
          </div>
         
       
      ) : (
        <button onClick={handleWaterPlant}>Water Plant</button>
      )}
      <div className='image-container'>
         <center> 
    <img src={remainImg} width={800} height={600}></img>
        </center>
      </div>
    </div>
  );
};

export default WateringRemainder;