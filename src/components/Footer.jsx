import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  // State for mobile expandable sections
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => {
      // If clicking the same section, just toggle it
      if (prev[sectionName]) {
        return { ...prev, [sectionName]: false };
      }
      // Otherwise, close all sections and open the clicked one
      return { [sectionName]: true };
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* DESKTOP LAYOUT - Existing code stays exactly the same */}
        <div className="footer__content">
          {/* BBS Räder Section */}
          <div className="footer__column">
            <h3 className="footer__column-title">BBS Räder</h3>
            <div className="footer__subsection">
              <h4 className="footer__subsection-title">nach Technologie</h4>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">Forging</a></li>
                <li><a href="#" className="footer__link">Flow Forming</a></li>
                <li><a href="#" className="footer__link">Casting</a></li>
              </ul>
            </div>
            <div className="footer__subsection">
              <h4 className="footer__subsection-title">nach Designlinien</h4>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">Performance Design</a></li>
                <li><a href="#" className="footer__link">Motorsport Design</a></li>
                <li><a href="#" className="footer__link">Utility Design</a></li>
                <li><a href="#" className="footer__link">Classic Design</a></li>
              </ul>
            </div>
            <div className="footer__alle-rader">
              <a href="#" className="footer__alle-rader-link">
                Alle Räder
                <img 
                  src="Assets/Startseite/arrow-right-red.svg" 
                  alt="Arrow Right" 
                  className="footer__arrow-svg" 
                />
              </a>
            </div>
          </div>

          {/* INFORMATION Section */}
          <div className="footer__column">
            <h3 className="footer__column-title">INFORMATION</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Technologie</a></li>
              <li><a href="#" className="footer__link">Shop</a></li>
              <li><a href="#" className="footer__link">Konfigurator</a></li>
              <li><a href="#" className="footer__link">Unternehmen</a></li>
              <li><a href="#" className="footer__link">News</a></li>
            </ul>

            {/* KONTAKT */}
            <div style={{ marginTop: "30px" }}>
              <h3 className="footer__column-title">KONTAKT</h3>
              <div className="footer__contact-item">
                <img src="Assets/Startseite/map.svg" alt="Location" className="footer__contact-icon" />
                <div>
                  <div>KW automotive GmbH</div>
                  <div>Aspachweg 14, 74427</div>
                  <div>Fichtenberg, Germany</div>
                </div>
              </div>
              <div className="footer__contact-item">
                <img src="Assets/Startseite/phone.svg" alt="Phone" className="footer__contact-icon" />
                <div>+49 (0) 7836 52-0</div>
              </div>
              <div className="footer__contact-item">
                <img src="Assets/Startseite/mail.svg" alt="Email" className="footer__contact-icon" />
                <div>sales.bbs@kwautomotive.de</div>
              </div>
            </div>
          </div>

          {/* Kundenservice Section */}
          <div className="footer__column">
            <h3 className="footer__column-title">KUNDENSERVICE</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Kontakt</a></li>
              <li><a href="#" className="footer__link">Größen- / Zulassungsdokumente</a></li>
              <li><a href="#" className="footer__link">Händlersuche</a></li>
              <li><a href="#" className="footer__link">Zahlungsmodalitäten</a></li>
              <li><a href="#" className="footer__link">Versandkosten</a></li>
            </ul>

            {/* Contact Button and Social Media moved here */}
            <div className="footer__contact-button-wrapper" style={{ marginTop: "20px" }}>
              <button className="footer__contact-button">Kontaktiere uns</button>
            </div>

            <div className="footer__social" style={{ marginTop: "20px" }}>
              <h4 className="footer__social-title">Social Media</h4>
              <div className="footer__social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="Assets/Startseite/facebook.svg" alt="Facebook" className="footer__social-icon" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="Assets/Startseite/instagram.svg" alt="Instagram" className="footer__social-icon" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <img src="Assets/Startseite/youtube.svg" alt="YouTube" className="footer__social-icon" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <img src="Assets/Startseite/tiktok.png" alt="TikTok" className="footer__social-icon" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src="Assets/Startseite/linkedin.png" alt="LinkedIn" className="footer__social-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Rechtliches Section */}
          <div className="footer__column">
            <h3 className="footer__column-title">RECHTLICHES</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Impressum</a></li>
              <li><a href="#" className="footer__link">Datenschutzerklärung</a></li>
              <li><a href="#" className="footer__link">Allgemeine Geschäftsbedingungen</a></li>
              <li><a href="#" className="footer__link">Widerrufsrecht für Verbraucher</a></li>
            </ul>

            {/* Logo and Copyright moved here */}
            <div className="footer__brand" style={{ marginTop: "30px" }}>
              <div className="footer__logo">
                <img 
                  src="Assets/Startseite/BBS-Logo-2025.svg" 
                  alt="BBS Logo" 
                  className="footer__logo-image"
                />
              </div>
              <div className="footer__copyright">
                © 2022 KW automotive GmbH. Alle Rechte vorbehalten.
              </div>
              <div className="footer__login">
                <button className="footer__login-button">
                  <img src="Assets/Startseite/login.svg" alt="Login" className="footer__login-icon" />
                  Händler Login
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT - New expandable sections */}
        <div className="footer__mobile-content">
          
          {/* BBS RÄDER - Expandable */}
         {/* BBS RÄDER - Expandable */}
<div className={`footer__mobile-section ${expandedSections.rader ? 'expanded' : ''}`}>
  <button 
    className="footer__mobile-header"
    onClick={() => toggleSection('rader')}
  >
    BBS RÄDER
    <span className="footer__mobile-arrow">▼</span>
  </button>
  <div className="footer__mobile-dropdown">
    <ul className="footer__mobile-links">
      <li><a href="#" className="footer__mobile-section-title">nach Technologie</a></li>
      <li><a href="#">Forging</a></li>
      <li><a href="#">Flow Forming</a></li>
      <li><a href="#">Casting</a></li>
      <li><a href="#" className="footer__mobile-section-title">nach Designlinien</a></li>
      <li><a href="#">Performance Design</a></li>
      <li><a href="#">Motorsport Design</a></li>
      <li><a href="#">Utility Design</a></li>
      <li><a href="#">Classic Design</a></li>
    </ul>
    {/* Add the Alle Räder button here */}
    <div className="footer__mobile-alle-rader">
      <a href="#" className="footer__mobile-alle-rader-link">
        Alle Räder
      </a>
    </div>
  </div>
</div>

          {/* INFORMATION - Expandable */}
          <div className={`footer__mobile-section ${expandedSections.information ? 'expanded' : ''}`}>
            <button 
              className="footer__mobile-header"
              onClick={() => toggleSection('information')}
            >
              INFORMATION
              <span className="footer__mobile-arrow">▼</span>
            </button>
            <div className="footer__mobile-dropdown">
              <ul className="footer__mobile-links">
                <li><a href="#">Technologie</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Konfigurator</a></li>
                <li><a href="#">Unternehmen</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>
          </div>

          {/* KUNDENSERVICE - Expandable */}
          <div className={`footer__mobile-section ${expandedSections.kundenservice ? 'expanded' : ''}`}>
            <button 
              className="footer__mobile-header"
              onClick={() => toggleSection('kundenservice')}
            >
              KUNDENSERVICE
              <span className="footer__mobile-arrow">▼</span>
            </button>
            <div className="footer__mobile-dropdown">
              <ul className="footer__mobile-links">
                <li><a href="#">Kontakt</a></li>
                <li><a href="#">Größen- / Zulassungsdokumente</a></li>
                <li><a href="#">Händlersuche</a></li>
                <li><a href="#">Zahlungsmodalitäten</a></li>
                <li><a href="#">Versandkosten</a></li>
              </ul>
            </div>
          </div>

          {/* RECHTLICHES - Expandable */}
          <div className={`footer__mobile-section ${expandedSections.rechtliches ? 'expanded' : ''}`}>
            <button 
              className="footer__mobile-header"
              onClick={() => toggleSection('rechtliches')}
            >
              RECHTLICHES
              <span className="footer__mobile-arrow">▼</span>
            </button>
            <div className="footer__mobile-dropdown">
              <ul className="footer__mobile-links">
                <li><a href="#">Impressum</a></li>
                <li><a href="#">Datenschutzerklärung</a></li>
                <li><a href="#">Allgemeine Geschäftsbedingungen</a></li>
                <li><a href="#">Widerrufsrecht für Verbraucher</a></li>
              </ul>
            </div>
          </div>

        

          {/* Mobile Buttons Section */}
          <div className="footer__mobile-buttons">
            <button className="footer__login-button">
              <img src="Assets/Startseite/login.svg" alt="Login" className="footer__login-icon" />
              Händler Login
            </button>
            <button className="footer__contact-button">Kontaktiere uns</button>
          </div>

          {/* Mobile Social Media */}
          <div className="footer__mobile-social">
            <h4 className="footer__mobile-social-title">Social Media</h4>
            <div className="footer__mobile-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="Assets/Startseite/facebook.svg" alt="Facebook" className="footer__social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="Assets/Startseite/instagram.svg" alt="Instagram" className="footer__social-icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="Assets/Startseite/youtube.svg" alt="YouTube" className="footer__social-icon" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src="Assets/Startseite/tiktok.png" alt="TikTok" className="footer__social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="Assets/Startseite/linkedin.png" alt="LinkedIn" className="footer__social-icon" />
              </a>
            </div>
          </div>

          {/* Mobile Bottom - Logo and Copyright */}
          <div className="footer__mobile-bottom">
            <div className="footer__mobile-logo">
              <img 
                src="Assets/Startseite/BBS-Logo-2025.svg" 
                alt="BBS Logo" 
                className="footer__logo-image"
              />
            </div>
            <div className="footer__mobile-copyright">
              © 2025 KW automotive GmbH. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;