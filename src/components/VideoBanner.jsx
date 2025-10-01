import React, { useRef, useState, useEffect } from "react";
import "./VideoBanner.css";

export default function VideoBanner() {
  const videoRef = useRef(null);
  const [ended, setEnded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Sample slide data - replace with your actual content
  const slides = [
    {
      title: "CH-R II Performance",
      subtitle: "Experience Ultimate Power",
      description: "Advanced engineering meets exceptional performance",
      ctaText: "ORDER NOW",
      ctaLink: "https://store.kwautomotive.de/de/shop"
    },
    {
      title: "Premium Design", 
      subtitle: "Crafted for Excellence",
      description: "Every detail meticulously designed for perfection",
      ctaText: "LEARN MORE",
      ctaLink: "https://store.kwautomotive.de/de/shop"
    },
    {
      title: "Innovation Redefined",
      subtitle: "Future of Automotive", 
      description: "Cutting-edge technology for the modern driver",
      ctaText: "DISCOVER",
      ctaLink: "https://store.kwautomotive.de/de/shop"
    }
  ];

  useEffect(() => {
    if (videoRef.current) {
      const handleEnded = () => {
        videoRef.current.currentTime = 0;
        setEnded(true);
      };
      videoRef.current.addEventListener("ended", handleEnded);
      return () => videoRef.current?.removeEventListener("ended", handleEnded);
    }
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="video-banner-container">
      <video
        ref={videoRef}
        src="/Assets/BBS_Ad_CH-RII_15sec_Website_fixed.mp4"
        autoPlay
        muted
        loop={false}
        controls={false}
        className="video-banner-video"
        playsInline
      />

      {/* Slide Content Overlay */}
      {ended && (
        <div className="slide-content">
          <h1 className="slide-title">{currentSlideData.title}</h1>
          <h2 className="slide-subtitle">{currentSlideData.subtitle}</h2>
          <p className="slide-description">{currentSlideData.description}</p>
        </div>
      )}

      <div className="video-overlay-bottom">
        <a href={currentSlideData.ctaLink} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', display: 'block', width: '100%'}}>
          <button className="red-box-heading">
            {ended ? currentSlideData.ctaText : "CH-R II COMING SOON"}
          </button>
        </a>
      </div>

     
        {/* Next Button */}
        <button className="nav-arrow nav-arrow-next" onClick={handleNextSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    
  );
}