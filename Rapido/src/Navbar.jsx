import React from 'react'
import RapidoLogo from "./assets/RapidoLogo.png";
function Navbar() {
  return (
    <div className='containerNav'>
      <img src= {RapidoLogo} alt="RapidoLogo" className='img'></img>
      
    <div className="navLinks">
      <a href="#" className='link'>Home</a>
      <a href="#" className='link'>About Us</a>
      <a href="#" className='link'>Safety</a>
      <a href="#" className='link'>Carrers</a>
      <a href="#" className='link'>Blog</a>
      <a href="#" className='link'>Press</a>
      <a href="#" className='link'>Contact Us</a>
       <button className='btnDownload'>Download App</button>
  </div>
     
    </div>
  )
}
export default Navbar
