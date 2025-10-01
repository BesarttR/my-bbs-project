import React from "react";
import Header from "./components/Header";
import VideoBanner from "./components/VideoBanner";
import ProductLinks from "./components/ProductLinks";
import Footer from "./components/Footer";
import "./index.css";
import "./fonts.css";

function App() {
  return (
    <div className="App" style={{ 
      fontFamily: "Arial, sans-serif",
      width: "100%",
      maxWidth: "100vw",
      overflowX: "hidden"
    }}>
      <Header />
      <VideoBanner />

      {/* Product Links Section */}
      <section className="product-links-section" style={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        margin: 0,
        padding: 0
      }}>
        <div
          className="product-links-wrapper"
          style={{
            padding: "50px 20px 0 0px", // no bottom padding
            backgroundColor: "#f8f8f8",
            width: "100%",
            maxWidth: "100vw",
            overflowX: "hidden",
            margin: 0
          }}
        >
          <ProductLinks />
        </div>
      </section>

      {/* Footer immediately after ProductLinks */}
      <Footer />
    </div>
  );
}

export default App;