import React, { useState, useEffect } from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const sliderWidth = companyLogos.length * 76; // Assuming each logo is 76px wide
    const step = 1; // Step size for smooth scrolling
    const intervalDelay = 50; // Delay between intervals in milliseconds
    const intervalId = setInterval(() => {
      setScrollPosition((prevScrollPosition) => {
        const newPosition = prevScrollPosition + step;
        return newPosition >= sliderWidth ? 0 : newPosition;
      });
    }, intervalDelay);

    return () => clearInterval(intervalId);
  }, []);

  const gradientBoxStyle = {
    background: "linear-gradient(to right, #b6a5ff, #87f7ff, #b6a5ff)",
    padding: "20px",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative"
  };

  const marqueeContentStyle = {
    display: "flex",
    transform: `translateX(-${scrollPosition}px)`,
    transition: "transform 0.5s ease",
    marginRight: "-3cm"
  };

  const logoStyle = {
    width: "76px",
    height: "76px",
    objectFit: "contain",
    transition: "transform 0.2s ease", // Add transition for smooth hover effect
    cursor: "pointer" // Add cursor style to indicate clickability
  };

  const handleLogoHover = (index) => {
    // Scale up the logo on hover
    const scaleFactor = 1.1;
    const newTransform = `scale(${scaleFactor})`;
    const logos = document.getElementsByClassName("company-logo");
    logos[index].style.transform = newTransform;
  };

  const handleLogoLeave = (index) => {
    // Reset the scale on mouse leave
    const logos = document.getElementsByClassName("company-logo");
    logos[index].style.transform = "scale(1)";
  };

  return (
    <div className={`marquee ${className}`}>
      <h5
        className="tagline mb-6 text-center"
        style={{ fontSize: "24px", color: "white" }}
      >
        OUR PARTNERS
      </h5>
      <div className="gradient-box" style={gradientBoxStyle}>
        <div className="marquee__content" style={marqueeContentStyle} id="marquee-container">
          <ul className="flex" style={{ margin: 0, padding: 0 }}>
            {companyLogos.map((logo, index) => (
              <li
                key={index}
                style={{
                  listStyle: "none",
                  margin: "0 1cm",
                  minWidth: "76px"
                }}
                onMouseEnter={() => handleLogoHover(index)} // Apply hover effect on mouse enter
                onMouseLeave={() => handleLogoLeave(index)} // Reset hover effect on mouse leave
              >
                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.image}
                    style={logoStyle}
                    alt={`Company logo ${index}`}
                    className="company-logo" // Add a class for easy targeting
                  />
                </a>
              </li>
            ))}
            {/* Dynamically duplicate logos to achieve infinite scrolling */}
            {companyLogos.map((logo, index) => (
              <li
                key={index + companyLogos.length}
                style={{
                  listStyle: "none",
                  margin: "0 1cm",
                  minWidth: "76px"
                }}
                onMouseEnter={() => handleLogoHover(index + companyLogos.length)}
                onMouseLeave={() => handleLogoLeave(index + companyLogos.length)}
              >
                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.image}
                    style={logoStyle}
                    alt={`Company logo ${index}`}
                    className="company-logo"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
