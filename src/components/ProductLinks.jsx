import React, { useState } from "react";
import "./ProductLinks.css";

const products = [
  { 
    name: "CI-R", 
    styleOptions: "21,600 Style options", 
    image: "/Assets/startseite/Wheels/Unlimited/CI-R Unlimited.png",
    link: "https://www.bbs.com/de/produkte-details/CI-R"
  },
  { 
    name: "CC-R", 
    styleOptions: "13,500 Style options", 
    image: "/Assets/startseite/Wheels/Unlimited/CC-R Unlimited.png",
    link: "https://www.bbs.com/de/produkte-details/CC-R"
  },
  { 
    name: "CH-R II", 
    styleOptions: "345,600 Style options", 
    image: "/Assets/startseite/Wheels/Unlimited/CH-R II Unlimited.png",
    link: "https://www.bbs.com/de/produkte-details/CH-R-II"
  },
];

export default function ProductLinks() {
  const [selectedSelectors, setSelectedSelectors] = useState({
    'CI-R': 0,
    'SR': 0,
    'CH-R II': 0,
    'CH-R': 0,
    'XR': 0,
    'CC-R': 0,
    'TL-A': 0,
    'SX': 0
  });
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on component mount
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSelectorClick = (wheelType, index) => {
    setSelectedSelectors(prev => ({
      ...prev,
      [wheelType]: index
    }));
  };

  // Gallery images for the carousel
  const galleryImages = [
    '/Assets/startseite/Gallery/home_gallery_1.jpg',
    '/Assets/startseite/Gallery/home_gallery_2.jpg',
    '/Assets/startseite/Gallery/home_gallery_3.jpg',
    '/Assets/startseite/Gallery/home_gallery_4.jpg',
    '/Assets/startseite/Gallery/home_gallery_5.jpg',
    '/Assets/startseite/Gallery/home_gallery_6.jpg',
    '/Assets/startseite/Gallery/home_gallery_7.jpg',
    '/Assets/startseite/Gallery/home_gallery_8.jpg'
  ];

  const maxDesktopIndex = galleryImages.length - 4; // Maximum slides for desktop (showing 4 at once)
  const maxMobileIndex = galleryImages.length - 1; // Maximum slides for mobile (showing 1 at once)
  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      if (isMobile) {
        return prev >= galleryImages.length - 1 ? 0 : prev + 1;
      } else {
        return prev >= maxDesktopIndex ? 0 : prev + 1;
      }
    });
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      if (isMobile) {
        return prev <= 0 ? galleryImages.length - 1 : prev - 1;
      } else {
        return prev <= 0 ? maxDesktopIndex : prev - 1;
      }
    });
  };

  const performanceDesign = [
    {
      name: 'CI-R',
      images: [
        '/Assets/startseite/Wheels/Performance Design/CI0202_NurburgringEdition_003.png',
        '/Assets/startseite/Wheels/Performance Design/CI0202_PlatinumSilver_003.png',
        '/Assets/startseite/Wheels/Performance Design/CI0202_SatinBlack_003.png',
        '/Assets/startseite/Wheels/Performance Design/CI0202_SatinBronze_003.png'
      ],
      selectors: [
        '/Assets/startseite/Wheels/Performance Design/Selector/CI-R 1.png',
        '/Assets/startseite/Wheels/Performance Design/Selector/CI-R 2.png',
        '/Assets/startseite/Wheels/Performance Design/Selector/CI-R 3.png',
        '/Assets/startseite/Wheels/Performance Design/Selector/CI-R 4.png'
      ]
    },
    {
      name: 'SR',
      images: [
        '/Assets/startseite/Wheels/Performance Design/SR002_HimalayaSatinGray_02.003.png',
        '/Assets/startseite/Wheels/Performance Design/SR002_VolcanoGrayDiamondCut_001.png'
      ],
      selectors: [
        '/Assets/startseite/Wheels/Performance Design/Selector/SR 1.png',
        '/Assets/startseite/Wheels/Performance Design/Selector/SR 1.png'
      ]
    }
  ];

  const motorsportDesign = [
    {
      name: 'CH-R II',
      images: [
        '/Assets/startseite/Wheels/Motorsport Design/CH-R II 602_SatinBronze_Side_007.png',
        '/Assets/startseite/Wheels/Motorsport Design/CH-R II 602_SatinPlatinum_001.png',
        '/Assets/startseite/Wheels/Motorsport Design/CH-R II 606_SatinBlack_001.png'
      ],
      selectors: [
        '/Assets/startseite/Wheels/Motorsport Design/Selector/CH-R II 1.png',
        '/Assets/startseite/Wheels/Motorsport Design/Selector/CH-R II 2.png',
        '/Assets/startseite/Wheels/Motorsport Design/Selector/CH-R II 3.png'
      ]
    },
    {
      name: 'CH-R',
      images: [
        '/Assets/startseite/Wheels/Motorsport Design/CH_R_102_BriliantSilver_001.png',
        '/Assets/startseite/Wheels/Motorsport Design/CH_R_102_Nurburgring_001.png',
        '/Assets/startseite/Wheels/Motorsport Design/CH_R_102_SatinBlack_001.png',
        '/Assets/startseite/Wheels/Motorsport Design/CH_R_102_SatinTitanium_001.png'
      ],
      selectors: [
        '/Assets/startseite/Wheels/Motorsport Design/Selector/CH-R 1.png',
        '/Assets/startseite/Wheels/Motorsport Design/Selector/CH-R 2.png',
        '/Assets/startseite/Wheels/Motorsport Design/Selector/CH-R 3.png',
        '/Assets/startseite/Wheels/Motorsport Design/Selector/CH-R 4.png'
      ]
    },
    {
      name: 'XR',
      images: [
        '/Assets/startseite/Wheels/Motorsport Design/XR0101_GlossyBlack_002.png',
        '/Assets/startseite/Wheels/Motorsport Design/XR0101_PlatinumSilver_02.003.png',
        '/Assets/startseite/Wheels/Motorsport Design/XR0101_SatinBronze_001.png'
      ],
      selectors: [
        '/Assets/startseite/Wheels/Motorsport Design/Selector/XR 1.png',
        '/Assets/startseite/Wheels/Motorsport Design/Selector/XR 2.png',
        '/Assets/startseite/Wheels/Motorsport Design/Selector/XR 3.png'
      ]
    }
  ];
  const utilityDesign = [
    {
      name: 'CC-R',
      images: [
        '/Assets/startseite/Wheels/Utility Design/CC_R_CC0101_DiamondCut_001.png',
        '/Assets/startseite/Wheels/Utility Design/CC_R_CC0101_SatinBlack_001.png',
        '/Assets/startseite/Wheels/Utility Design/CC_R_CC0101_SatinPlatinum_001.png'
      ],
      selectors: [
        '/Assets/startseite/Wheels/Utility Design/Selector/CC-R 1.png',
        '/Assets/startseite/Wheels/Utility Design/Selector/CC-R 2.png',
        '/Assets/startseite/Wheels/Utility Design/Selector/CC-R 3.png'
      ]
    },
    {
      name: 'TL-A',
      images: [
        '/Assets/startseite/Wheels/Utility Design/TLA0101_Glossy Bronze_001.png',
        '/Assets/startseite/Wheels/Utility Design/TLA0101_SatinBlack_001.png',
        '/Assets/startseite/Wheels/Utility Design/TLA0101_SatinPlatinumSilver_001.png'
      ],
      selectors: [
        '/Assets/startseite/Wheels/Utility Design/Selector/TL-A 1.png',
        '/Assets/startseite/Wheels/Utility Design/Selector/TL-A 2.png',
        '/Assets/startseite/Wheels/Utility Design/Selector/TL-A 3.png'
      ]
    },
    {
      name: 'SX',
      images: [
        '/Assets/startseite/Wheels/Utility Design/SX0101_BrilliantSilver_003.png',
        '/Assets/startseite/Wheels/Utility Design/SX0101_CristalBlack_02.001.png',
        '/Assets/startseite/Wheels/Utility Design/SX0101_PlatinumSilver DiamondCut_003.png'
      ],
      selectors: [
        '/Assets/startseite/Wheels/Utility Design/Selector/SX 1.png',
        '/Assets/startseite/Wheels/Utility Design/Selector/SX 2.png',
        '/Assets/startseite/Wheels/Utility Design/Selector/SX 3.png'
      ]
    }
  ];
  

  const WheelCard = ({ wheel, category }) => (
    <div className="wheel-showcase__card">
      <div className="wheel-showcase__image-container">
        <img 
          src={wheel.image} 
          alt={wheel.name}
          className="wheel-showcase__image"
        />
      </div>
      
      <h3 className="wheel-showcase__title">
        {wheel.name}
      </h3>
      
      <div className="wheel-showcase__selectors">
        {wheel.selectors.map((selector, index) => (
          <button
            key={index}
            onClick={() => handleSelectorClick(wheel.name, index)}
            className={`wheel-showcase__selector ${
              selectedSelectors[wheel.name] === index 
                ? 'wheel-showcase__selector--active' 
                : ''
            }`}
          >
            <img 
              src={selector} 
              alt={`${wheel.name} variant ${index + 1}`}
              className="wheel-showcase__selector-image"
            />
          </button>
        ))}
      </div>
    </div>
  );

  return (
  <div className="product-links-wrapper responsive-container" style={{ background: "#fff" }}>

      {/* Header Section */}
      <div className="product-links__header responsive-header">
        <img src="/Assets/startseite/wheel_zeichnung.png" alt="Wheel Zeichnung" className="product-links__wheel-image responsive-wheel-image" />
        <div className="product-links__headline responsive-headline">
          <p className="product-links__dimensions responsive-dimensions">Dimensions, Fit & Style</p>
          <h2 className="product-links__title responsive-title">
            THE NEW WORLD OF <br />WHEELS IS UNLIMITED
          </h2>
        </div>
      </div>

      {/* Wheels Grid */}
      <div className="product-links__grid responsive-grid">
        {products.map((p) => (
          <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" className="product-links__card responsive-card">
            <img src={p.image} alt={p.name} className="product-links__card-image responsive-card-image" />
            
  <div className="product-links__image-line"></div>
            <div className="product-links__card-title responsive-card-title">
              <strong className="product-links__card-name responsive-card-name">{p.name}</strong>
              <div className="product-links__unlimited-badge responsive-badge">
                <img src="/Assets/startseite/Unlimited_Button.svg" alt="Unlimited" className="product-links__unlimited-logo" />
              </div>
            </div>
            <div className="product-links__card-info responsive-card-info">
              <div className="product-links__info-item">
                <img src="/Assets/startseite/icons/style.svg" alt="Style options" className="product-links__info-icon" />
                <span className="product-links__info-text responsive-info-text">{p.styleOptions}</span>
              </div>
              <div className="product-links__info-item">
                <img src="/Assets/startseite/icons/montage.svg" alt="Mounting system" className="product-links__info-icon" />
                <span className="product-links__info-text responsive-info-text">Unlimited mounting system</span>
              </div>
            </div>
          </a>
        ))}

        {/* GO UNLIMITED Box */}
        <a href="https://www.bbs.com/de/unlimited-ubersicht" target="_blank" rel="noopener noreferrer" className="product-links__go-unlimited responsive-unlimited-box">
          <div className="product-links__go-unlimited-logo responsive-unlimited-logo">
            <img src="/Assets/startseite/Unlimited_Button.svg" alt="BBS Logo" className="bbs-logo-image" />
          </div>
          <div className="product-links__go-unlimited-text responsive-unlimited-text">
            <div className="product-links__go-unlimited-title responsive-unlimited-title">GO UNLIMITED</div>
            <div className="product-links__go-unlimited-desc responsive-unlimited-desc">
              BBS Unlimited enables limitless <br/>customization of wheels - from <br/>colors to details - in the highest <br/> quality.
            </div>
          </div>
        </a>
      </div>

      {/* Button Section */}
      <div className="product-links__button-section responsive-button-section">
        <a href="https://www.bbs.com/de/produkte" target="_blank" rel="noopener noreferrer">
          <button className="product-links__overview-button responsive-overview-button">TO THE WHEEL OVERVIEW</button>
        </a>
      </div>

         {/* Unlimited System Section */}
         <div className="product-links-new responsive-unlimited-section">
        <section className="unlimited-intro responsive-intro">
          <div className="unlimited-intro__container responsive-intro-container">
            <h1 className="unlimited-intro__main-title responsive-main-title">UNLIMITED SYSTEM</h1>
            <p className="unlimited-intro__text responsive-intro-text">
              BBS Unlimited combines technical precision and individual design in a unique wheel <br/> 
              system. Thanks to modular components, the wheels fit almost any vehicle and can be <br/>
               freely configured in terms of design, style and details.
            </p>
            <div className="unlimited-intro__features-grid responsive-features-grid">
            <div className="unlimited-intro__feature-card responsive-feature-card">
              <div className="unlimited-intro__feature-icon responsive-feature-icon">
                <img src="/Assets/startseite/icons/Icon_unlimited dimensions.svg" alt="Unlimited Dimensions" />
              </div>
              <h3 className="unlimited-intro__feature-subtitle responsive-feature-subtitle">UNLIMITED</h3>
              <h2 className="unlimited-intro__feature-title responsive-feature-title">DIMENSIONS</h2>
              <div className="product-links__image-line1"></div>
              <p className="unlimited-intro__feature-description responsive-feature-description">
                Numerous wheel sizes, wheel widths and <br/>
                concavities can be individually combined for <br/>
                front and rear axles.
              </p>
            </div>
            
            <div className="unlimited-intro__feature-card responsive-feature-card">
              <div className="unlimited-intro__feature-icon responsive-feature-icon">
                <img src="/Assets/startseite/icons/Icon_unlimited fit.svg" alt="Unlimited Fit" />
              </div>
              <h3 className="unlimited-intro__feature-subtitle responsive-feature-subtitle">UNLIMITED</h3>
              <h2 className="unlimited-intro__feature-title responsive-feature-title">FIT</h2>
              <div className="product-links__image-line1"></div>
              <p className="unlimited-intro__feature-description responsive-feature-description">
                An unprecedented variety of applications and <br/>
                combinations with just a few components <br/>
                and flexible adjustment of the offset.
              </p>
            </div>
            
            <div className="unlimited-intro__feature-card responsive-feature-card">
              <div className="unlimited-intro__feature-icon responsive-feature-icon">
                <img src="/Assets/startseite/icons/Icon_unlimited style.svg" alt="Unlimited Style" />
              </div>
              <h3 className="unlimited-intro__feature-subtitle responsive-feature-subtitle">UNLIMITED</h3>
              <h2 className="unlimited-intro__feature-title responsive-feature-title">STYLE</h2>
              <div className="product-links__image-line1"></div>
              <p className="unlimited-intro__feature-description responsive-feature-description">
                Countless options for customizing the wheels. <br/> 
                Wheel color, center caps, rim protectors, wheel bolts and <br/>
                valve caps. Make a wheel your wheel.
              </p>
            </div>
          </div>

          </div>
        </section>

        {/* Customizable Forever Section */}
        <section className="customizable-section responsive-customizable">
          <div className="customizable-section__container responsive-customizable-container">
            <div className="customizable-section__content responsive-customizable-content">
              {/* Left Content */}
              <div className="customizable-section__left-content responsive-left-content">
                <div className="customizable-section__wheel-image responsive-wheel-image">
                  <img src="/Assets/unlimited_1.png" alt="BBS Unlimited Wheel" />
                </div>
                <div className="customizable-section__text-content responsive-text-content">
                  <span className="customizable-section__bought-once responsive-bought-once">BOUGHT ONCE</span>
                  <h2 className="customizable-section__title responsive-section-title">CUSTOMIZABLE<br/> FOREVER</h2>
                  <p className="customizable-section__description responsive-description">
                    Thanks to the Unlimited mounting system, your<br/>
                    wheel fits not just one model, but almost any<br/>
                    vehicle with a 5-hole mount.
                  </p>
                  <p className="customizable-section__description responsive-description">
                    New car? With replaceable centering rings and<br/>
                    adapter discs, you can mount your BBS Unlimited<br/>
                    wheel set on your next vehicle.
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="customizable-section__right-content responsive-right-content">
                <div className="customizable-section__wheel-image responsive-wheel-image">
                  <img src="/Assets/unlimited_2.png" alt="BBS Unlimited Wheel Details" />
                </div>
                <div className="customizable-section__text-content responsive-text-content">
                  <span className="customizable-section__details-label responsive-details-label">IT'S IN THE DETAILS</span>
                  <h2 className="customizable-section__title responsive-section-title">SWAP THE STYLE<br/> COMPONENTS</h2>
                  <p className="customizable-section__description responsive-description">
                    Just like the wheel itself, you can also match the<br/>
                    style components to different vehicles.
                  </p>
                  <p className="customizable-section__description responsive-description">
                    Rim protectors, center caps, valve caps and<br/>
                    wheel bolts can be ordered individually in<br/>
                    different colors.
                  </p>
                </div>
              </div>
            </div>

            <div className="customizable-section__cta responsive-cta">
              <a href="https://www.bbs.com/de/unlimited-ubersicht" target="_blank" rel="noopener noreferrer">
                <button className="customizable-section__details-button responsive-details-button">
                  ALL DETAILS ABOUT THE UNLIMITED SYSTEM
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>

{/* --- DESIGN LOGO SECTION WITH SEPARATE DIVS --- */}
<div className="design-logo-section responsive-design-logo">
  {/* Desktop Logo Section */}
  <div className="desktop-logo-section">
    <img
      src="/Assets/startseite/designlinien.jpg"
      alt="Design Linien Desktop"
      className="design-logo-image"
    />
  </div>
  
  {/* Mobile Logo Section */}
  <div className="mobile-logo-section">
    <img
      src="/Assets/designlinien_mobile.jpg"
      alt="Design Linien Mobile"
      className="design-logo-image"
    />
  </div>
  
  <div className="design-logo-text responsive-design-text">THE DESIGNS</div>

      {/* --- WHEEL SHOWCASE SECTION --- */}
<div className="wheel-showcase-section responsive-showcase">

{/* PERFORMANCE DESIGN */}
<section className="wheel-showcase__category responsive-category">
  <h2 className="wheel-showcase__category-title responsive-category-title">PERFORMANCE DESIGN</h2>
  <div className="wheel-showcase__cards-wrapper responsive-cards-wrapper">
    <div className="wheel-showcase__cards-left responsive-cards-left">
      {performanceDesign.map((wheel, index) => (
        <div className="b-wheel__card-wrapper responsive-card-wrapper" key={index}>
          <div className="b-wheel__card responsive-wheel-card">
            <div className="b-wheel__cardImage responsive-card-image">
              <img 
                className="b-wheel__cardImg responsive-card-img" 
                src={wheel.images[selectedSelectors[wheel.name]]} 
                alt={wheel.name} 
              />
            </div>
            <div className="b-wheel__line"></div>
            <div className="b-wheel__mobile responsive-mobile">
              <div className="b-wheel__cardTitle responsive-card-title">{wheel.name}</div>
              <div className="b-wheel__designColors responsive-design-colors">
                {wheel.selectors.map((sel, i) => (
                  <div
                    key={i}
                    className={`b-wheel__designColorsItem responsive-color-item ${
                      selectedSelectors[wheel.name] === i
                        ? "b-wheel__designColorsItem--active"
                        : ""
                    }`}
                    onClick={() => handleSelectorClick(wheel.name, i)}
                  >
                    <img className="b-wheel__designImgs responsive-design-imgs" src={sel} alt={`Selector ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* MOTORSPORT DESIGN */}
<section className="wheel-showcase__category responsive-category">
  <h2 className="wheel-showcase__category-title responsive-category-title">MOTORSPORT DESIGN</h2>
  <div className="wheel-showcase__cards-wrapper responsive-cards-wrapper">
    <div className="wheel-showcase__cards-left responsive-cards-left">
      {motorsportDesign.map((wheel, index) => (
        <div className="b-wheel__card-wrapper responsive-card-wrapper" key={index}>
          <div className="b-wheel__card responsive-wheel-card">
            <div className="b-wheel__cardImage responsive-card-image">
              <img 
                className="b-wheel__cardImg responsive-card-img" 
                src={wheel.images[selectedSelectors[wheel.name]]} 
                alt={wheel.name} 
              />
            </div>
            <div className="b-wheel__line"></div>
            <div className="b-wheel__mobile responsive-mobile">
              <div className="b-wheel__cardTitle responsive-card-title">{wheel.name}</div>
              <div className="b-wheel__designColors responsive-design-colors">
                {wheel.selectors.map((sel, i) => (
                  <div
                    key={i}
                    className={`b-wheel__designColorsItem responsive-color-item ${
                      selectedSelectors[wheel.name] === i
                        ? "b-wheel__designColorsItem--active"
                        : ""
                    }`}
                    onClick={() => handleSelectorClick(wheel.name, i)}
                  >
                    <img className="b-wheel__designImgs responsive-design-imgs" src={sel} alt={`Selector ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* UTILITY DESIGN */}
<section className="wheel-showcase__category responsive-category">
  <h2 className="wheel-showcase__category-title responsive-category-title">UTILITY DESIGN</h2>
  <div className="wheel-showcase__cards-wrapper responsive-cards-wrapper">
    <div className="wheel-showcase__cards-left responsive-cards-left">
      {utilityDesign.map((wheel, index) => (
        <div className="b-wheel__card-wrapper responsive-card-wrapper" key={index}>
          <div className="b-wheel__card responsive-wheel-card">
            <div className="b-wheel__cardImage responsive-card-image">
              <img 
                className="b-wheel__cardImg responsive-card-img" 
                src={wheel.images[selectedSelectors[wheel.name]]} 
                alt={wheel.name} 
              />
            </div>
            <div className="b-wheel__line"></div>
            <div className="b-wheel__mobile responsive-mobile">
              <div className="b-wheel__cardTitle responsive-card-title">{wheel.name}</div>
              <div className="b-wheel__designColors responsive-design-colors">
                {wheel.selectors.map((sel, i) => (
                  <div
                    key={i}
                    className={`b-wheel__designColorsItem responsive-color-item ${
                      selectedSelectors[wheel.name] === i
                        ? "b-wheel__designColorsItem--active"
                        : ""
                    }`}
                    onClick={() => handleSelectorClick(wheel.name, i)}
                  >
                    <img className="b-wheel__designImgs responsive-design-imgs" src={sel} alt={`Selector ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

</div>
{/* Logo section */}
<div className="logo-section responsive-logo">
  <img
    src="/Assets/startseite/aktion.jpg"
    alt="Aktion Logo"
    className="logo-section__img"
  />
  <a href="https://store.kwautomotive.de/de/shop" target="_blank" rel="noopener noreferrer" className="logo-section__button responsive-store-button">
    FIND YOUR WHEEL IN OUR STORE
  </a>
</div>
{/* Mobile logo section */}
<div className="logo-section mobile-logo">
  <img
    src="/Assets/aktion_mobile.jpg"
    alt="Aktion Mobile Logo"
    className="logo-section__img"
  />
  <a
    href="https://store.kwautomotive.de/de/shop"
    target="_blank"
    rel="noopener noreferrer"
    className="logo-section__button mobile-logo-button"
  >
    FIND YOUR WHEEL IN OUR STORE
  </a>
</div>

{/* Gallery Section */}
<div className="gallery-section responsive-gallery">
  <div className="gallery-section__header responsive-gallery-header">
    <p className="gallery-section__subtitle responsive-gallery-subtitle">DOWN FOR SOME INSPIRATION?</p>
    <h2 className="gallery-section__title responsive-gallery-title">ALL EYES ON BBS</h2>
  </div>

  <div className="gallery-section__carousel responsive-carousel">
    <button
      className="gallery-section__nav gallery-section__nav--prev responsive-nav responsive-nav-left"
      onClick={prevImage}
    >
      <img
        src="/Assets/startseite/left-arrow.svg"
        alt="Previous"
        className="gallery-section__arrow"
      />
    </button>

    <div className="gallery-section__images-container responsive-images-container">
    <div
  className="gallery-section__images responsive-images"
  style={{ 
    transform: isMobile 
      ? `translateX(calc(-${currentImageIndex * 100}% - ${currentImageIndex * 12}px))` 
      : `translateX(calc(-${Math.min(currentImageIndex, galleryImages.length - 4) * 25}% - ${Math.min(currentImageIndex, galleryImages.length - 4) * 12}px))`
  }}
>
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-section__image-wrapper responsive-image-wrapper">
            <img
              src={image}
              alt={`BBS Gallery ${index + 1}`}
              className="gallery-section__image responsive-image"
            />
          </div>
        ))}
      </div>
    </div>

    <button
      className="gallery-section__nav gallery-section__nav--next responsive-nav responsive-nav-right"
      onClick={nextImage}
    >
      <img
        src="/Assets/startseite/right-arrow.svg"
        alt="Next"
        className="gallery-section__arrow"
      />
    </button>
  </div>

  <div className="gallery-section__indicators responsive-indicators">
  {isMobile 
    ? galleryImages.map((_, index) => (
        <div
          key={index}
          className={`gallery-section__indicator responsive-indicator ${
            currentImageIndex === index
              ? "gallery-section__indicator--active"
              : ""
          }`}
        />
      ))
    : Array.from({ length: galleryImages.length - 3 }).map((_, index) => (
        <div
          key={index}
          className={`gallery-section__indicator responsive-indicator ${
            currentImageIndex === index
              ? "gallery-section__indicator--active"
              : ""
          }`}
        />
      ))
  }
</div>

  <div className="gallery-section__cta responsive-gallery-cta">
    <button className="gallery-section__button responsive-gallery-button">
      VIEW FULL WHEEL GALLERY
    </button>
  </div>
</div>
{/* Support & Contact Section */}
<section className="support-contact responsive-support">
  <div className="support-contact__container responsive-support-container">
    {/* Header */}
    <h2 className="support-contact__title responsive-support-title">
      SUPPORT <span className="mobile-break"></span> & CONTACT
    </h2>
    
    {/* Contact Cards Grid */}
    <div className="support-contact__grid responsive-support-grid">
      {/* Email Card */}
      <div className="support-contact__card responsive-support-card">
        <div className="support-contact__card-header responsive-card-header">
          <img 
            src="/Assets/startseite/icons/Mail.svg" 
            alt="Email" 
            className="support-contact__icon responsive-support-icon"
          />
          <h3 className="support-contact__card-title responsive-support-card-title">E-MAIL</h3>
        </div>
        <h3 className="support-contact__card-text responsive-support-text">
          sales.bbs@kwautomotive.de
        </h3>
      </div>
      {/* Phone Card */}
      <div className="support-contact__card responsive-support-card">
        <div className="support-contact__card-header responsive-card-header">
          <img 
            src="/Assets/startseite/icons/Phone.svg" 
            alt="Phone" 
            className="support-contact__icon responsive-support-icon"
          />
          <h3 className="support-contact__card-title responsive-support-card-title">PHONE</h3>
        </div>
        <h3 className="support-contact__card-text responsive-support-text">
          +49 7971 9630-0
        </h3>
      </div>

      {/* Dealer Search Card */}
      <div className="support-contact__card responsive-support-card">
        <div className="support-contact__card-header responsive-card-header">
          <img 
            src="/assets/startseite/icons/montage.svg" 
            alt="Dealer Search" 
            className="support-contact__icon responsive-support-icon"
          />
          <h3 className="support-contact__card-title responsive-support-card-title">DEALER SEARCH</h3>
        </div>
        <h3 className="support-contact__card-text responsive-support-text">
          To the dealer search
        </h3>
      </div>
    </div>
  </div>
</section>
</div>

    </div> 
   
  );
}