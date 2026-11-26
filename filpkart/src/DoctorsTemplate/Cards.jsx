import React from 'react'
import image from '../assets/image.png';

function Cards() {
  return (
    <div className='card'>

      <div className="cardInfo">
        <img src={image} alt="welcome" className='img'/>

        <div className="content">
          <h2>Dr.Santhosh</h2>
          <p>cardio Specialist</p>
          <h5>Male</h5>
        </div>
      </div>

      <button className='btn2'>
        View Details
      </button>

    </div>
  )
}

export default Cards