import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/Logo.png'
import Login from '../components/Login.jsx';
import { Link } from 'react-router-dom';

function Homepage_nav() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.pageYOffset;
    // Adjust the scroll value for when the navbar should become sticky
    if (offset > 50 && !isSticky) {
      setIsSticky(true);
    } else if (offset <= 50 && isSticky) {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  return (
    <nav className={`navbar__ ${isSticky ? 'navbar__sticky' : ''}`}>
      <div className="navbar__logo">
        <img src={Logo} alt="logo"/>
      </div>
      <button
        className="navbar__toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="navbar__icon"></span>
        <span className="navbar__icon"></span>
        <span className="navbar__icon"></span>
      </button>
      <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Features
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Plans
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Help
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Blog
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link__link">
            Sign In
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link__link">
            Sign up
          </a>
        </li>
      </ul>
      <Link to="/login" className='btn-link'> <button className="btn float-end" id='homepage-login'>Login</button></Link>
     
        <button className="btn" id='homepage-signup'>Signup</button>
    </nav>
  );
}
export default Homepage_nav;
