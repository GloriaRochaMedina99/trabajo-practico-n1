import React from 'react'
import {AiFillFacebook} from 'react-icons/Ai';
import {AiFillInstagram} from 'react-icons/Ai';
import {IoLogoWhatsapp} from 'react-icons/Io';
const Footer = () => {
  return (
    <>
      <h5>Redes sociales</h5>
      <div class="social">
      <a href="https://es-la.facebook.com/"><AiFillFacebook ClassName='fc'/></a> 
      <a href="https://www.instagram.com"><AiFillInstagram ClassName='in'/></a> 
      <a href="https://www.whattsapp.com"><IoLogoWhatsapp ClassName='wh'/></a> 
      {/*<button className='btn' href="https://www.facebook.com"><AiFillFacebook ClassName='fc'/></button>*/}
      </div>

      </>
  )
}

export default Footer
