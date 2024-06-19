import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { FaRegCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';

export default function AppBar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('Auth token');
    sessionStorage.removeItem('User Id');
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  useEffect(() => {
    const checkAuthToken = () => {
      const token = sessionStorage.getItem('Auth token');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('storage', checkAuthToken);
    checkAuthToken();

    return () => {
      window.removeEventListener('storage', checkAuthToken);
    };
  }, []);

  return (
    <header className="bg-white shadow-md p-1 sm:px-6 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <div className="flex items-center">
          <img src={logo} alt="Logo Bali Edventures" className="h-14 w-14 mr-2 sm:h-18 sm:w-18" />
          <div>
            <Link to='/'>
              <h1 className="text-sndbgColor text-sm sm:text-xl font-bold">Bali</h1>
              <h1 className="font-bold">
                <span className="text-bgColor">Ed</span>
                <span className="text-sndbgColor">ventures</span>
              </h1>
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-bgColor">
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>

          <div className={`flex-col sm:flex-row items-center gap-24 font-semibold ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
            <ul className='flex items-center gap-12 mr-24'>
              <Link to='/'>
                <li className='text-bgOrange hover:underline'>Home</li>
              </Link>
              <Link to='/trip'>
                <li className='hover:underline'>Trip</li>
              </Link>
              <Link to='/about'>
                <li className='hover:underline'>About Us</li>
              </Link>
            </ul>

            <ul className='flex items-center gap-8'>
              <Link to='/booking-cart'>
                <li className='hover:underline flex items-center'>
                  <FaRegCalendarAlt size={28} className='text-bgColor mr-2 sm:mr-0' />
                  {cartCount > 0 && (
                    <div className="rounded-full bg-yellow-400 text-black inline-flex justify-center items-center w-full absolute -top-1 -right-1">
                      {cartCount}
                    </div>
                  )}
                </li>
              </Link>
              {isLoggedIn ? (
                <button onClick={handleLogout} className='hover:underline'>Log Out</button>
              ) : (
                <>
                  <Link to='/sign-in'>
                    <li className='hover:underline'>Sign in</li>
                  </Link>
                  <Link to='/sign-up'>
                    <li className='hover:underline'>Sign Up</li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

