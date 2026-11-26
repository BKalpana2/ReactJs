import React from 'react'

function Navbar() {
  return (
    <div className='navContainer'>
        <i class="fa-solid fa-briefcase-medical"></i>
        <span> Doctors App</span>
    <div className='nav'>
      <button className='btn'>Home</button>
      <button className='btn'>Add Doctor</button>
    </div>
    </div>
  )
}
export default Navbar
