import React, { useState, useEffect } from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const sliderWidth = companyLogos.length * 134; // Assuming each logo is 134px wide
    const animationDuration = 80; // Duration in seconds
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
    background: "linear-gradient(to right, #4e176f, #000)",
    padding: "20px", // Adjust padding as needed
    borderRadius: "10px", // Optional: Add border-radius for rounded corners
    overflow: "hidden", // Ensure content is clipped inside the box
    position: "relative" // Needed for absolute positioning of content
  };

  const marqueeContentStyle = {
    display: "flex",
    transform: `translateX(-${scrollPosition}px)`, // Use pixels for smoother scrolling
    transition: "transform 0.5s ease", // Smooth transition effect
    marginRight: "-3cm" // Add negative margin to counteract the margin of the last logo
  };

  return (
    <div className={`marquee ${className}`}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <div className="gradient-box" style={gradientBoxStyle}>
        <div className="marquee__content" style={marqueeContentStyle}>
          <ul className="flex" style={{ margin: 0, padding: 0 }}>
            {companyLogos.map((logo, index) => (
              <li
                key={index}
                style={{
                  listStyle: "none",
                  margin: "0 3cm", // Adjust spacing between logos
                  minWidth: "134px" // Ensure minimum width for logos
                }}
              >
                <img src={logo} width={134} height={28} alt={logo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
