import React, { useEffect, useRef, useState } from 'react';
import './Header.css';

const NavigationHeader = () => {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(window.scrollY > headerRef.current.offsetTop);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent background scrolling when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.hamburger') && !event.target.closest('.mobile-menu')) {
        setMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <div ref={headerRef} className={`header-box ${isSticky ? 'sticky' : ''}`}>
      <header className="nav-header">
        <div className="nav-container">
          
          {/* Logo */}
          <div className="logo">
            <img 
              src="/assets/startseite/BBS-Logo-2025.svg" 
              alt="BBS Wheels Logo 2025" 
              className="logo-img" 
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="nav-links">
            <a href="#" className="nav-link">RADPROGRAMM</a>
            <a href="#" className="nav-link">UNLIMITED</a>
            <a href="#" className="nav-link">GALERIE</a>
            <a href="#" className="nav-link">UNTERNEHMEN</a>
          </nav>

          {/* Desktop Right side buttons */}
          <div className="nav-actions">
            <button className="btn btn-shop">SHOP</button>
            <button className="btn btn-search">HÄNDLERSUCHE</button>

            {/* Desktop Language selector */}
            <div className="language-selector">
              <button className="language-btn">
                <span className="lang-code">DE |</span>
                <img 
                  src="https://flagcdn.com/w20/de.png" 
                  alt="German Flag" 
                  className="flag-icon" 
                />
                <span className="lang-text">DE</span>
              </button>
            </div>
          </div>

          {/* Hamburger menu for mobile */}
          <div 
            className={`hamburger ${menuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile menu overlay - Updated structure */}
        <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
          <nav className="mobile-nav-links">
            <div className="mobile-nav-item has-arrow">
              <a href="#">RÄDER</a>
            </div>
            <div className="mobile-nav-item has-arrow">
              <a href="#">TECHNOLOGIE</a>
            </div>
            <div className="mobile-nav-item">
              <a href="#">GALERIE</a>
            </div>
            <div className="mobile-nav-item">
              <a href="#">UNTERNEHMEN</a>
            </div>
            <div className="mobile-nav-item">
              <a href="#">KONTAKT</a>
            </div>
          </nav>

          <div className="mobile-bottom-section">
            {/* Language selector */}
            <div className="mobile-language-selector">
              <button className="language-btn">
                <span className="lang-code">DE |</span>
                <img 
                  src="https://flagcdn.com/w20/de.png" 
                  alt="German Flag" 
                  className="flag-icon"
                />
                <span className="lang-text">DE</span>
              </button>
            </div>

         {/* Car selector */}
<div className="mobile-car-selector">
  <img 
    src="/assets/startseite/car-image.svg" 
    alt="Car Icon" 
    className="car-icon"
  />
  <span className="car-selector-text">Fahrzeug wählen</span>
</div>

            {/* Buttons */}
            <div className="mobile-buttons">
              <button className="btn btn-shop">SHOP</button>
              <button className="btn btn-search">HÄNDLERSUCHE</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavigationHeader;