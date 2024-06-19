import React from 'react';
import logo from "../assets/images/logo.png";
import { FaEnvelope, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='footer bg-bgColor py-4 px-4'>
      <div className='footer-content flex justify-around align-middle mt-8'>
        <div className='logo-section'>
          <img src={logo} alt="Logo Bali Edventures"
          className='w-20 h-auto'/>
          <h1 className="text-white sm:text-xl  font-bold">Bali</h1>
              <h1 className="font-bold sm:text-3xl">
                <span className="text-sndbgOrange">Ed</span>
                <span className="text-white">ventures</span>
              </h1>

        </div>

        <div className='contact-us'>
          <h1 className='text-2xl text-bgOrange font-semibold'>Contact Us!</h1>
          <p className='text-white'>Feel free to reach out to us for more information or to book your next adventure:</p>
          <div className='email py-4 flex gap-2'>
            <FaEnvelope className='icon text-white text-2xl' />
            <a className='text-l text-sndbgOrange' href="mailto:info@baliedventures.com" target='_blank' rel='noopener noreferrer'>info@baliedventures.com</a>
          </div>

          <div className='sosmed'>
            <h1  className='text-white text-xl py-4' >Follow Us On :</h1>
            <div className='sosmed-list flex gap-12 text-2xl text-white' >
            <a href="https://www.tiktok.com" target='_blank' rel='noopener noreferrer'>
              <FaTiktok className='icon' />
            </a>
            <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='icon' />
            </a>
            <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='icon' />
            </a>
            </div>
          </div>
        </div>
      </div>

      <div className='copyright text-xs text-center text-white mt-8 border-t pt-4'>
        <p>Copyright © 2024 Bali Edventures. All rights reserved</p>
      </div>
    </footer>
  );
}
