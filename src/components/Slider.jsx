import React, { useState } from "react";

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <img
        src={slides[current]}
        alt={`slide-${current}`}
        style={{ width: "100%", objectFit: "cover", borderRadius: "10px" }}
      />
      <button onClick={prevSlide} style={arrowStyle("left")}>
        {"<"}
      </button>
      <button onClick={nextSlide} style={arrowStyle("right")}>
        {">"}
      </button>
      {/* Dots */}
      <div style={dotsContainer}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            style={{
              ...dotStyle,
              backgroundColor: idx === current ? "#000" : "#ccc",
            }}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

const arrowStyle = (side) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  [side]: "10px",
  backgroundColor: "rgba(0,0,0,0.5)",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "35px",
  height: "35px",
  cursor: "pointer",
});

const dotsContainer = {
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "8px",
};

const dotStyle = {
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  display: "inline-block",
  cursor: "pointer",
};
