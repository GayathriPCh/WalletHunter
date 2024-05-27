import React, { useState } from 'react';
import Section from "./Section";
import Heading from "./Heading";

const Services = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="Our Products" />
        <div className="card-wrapper">
          <div
            className={`product-card ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <p className="title">Telegram Trends Analyzer</p>
            {hovered && (
              <div className="visit-link">
                <a href="https://telegramtrends.xyz" className="visit-btn">Visit Website</a>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          text-align: center;
        }

        .card-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }

        .product-card {
          position: relative;
          width: 380px; /* Increased width */
          height: 280px; /* Increased height */
          border: none;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          background: linear-gradient(120deg, #000000, #7E54C6);
          box-shadow: inset calc(-1 * 380px) calc(-1 * 280px) 0 black, 
                      inset 380px calc(-1 * 280px) 0 #7E54C6, 
                      inset calc(-1 * 380px) 280px 0 #0000FF, 
                      inset 380px 280px 0 #7E54C6, 
                      0 0 20px rgba(0, 0, 0, 0.6); 
          transition: box-shadow ease-in-out .6s, color ease-in-out .5s, background-color ease-in-out .6s;
        }

        .title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 28px; /* Increased font size */
          font-weight: bold;
          text-align: center;
          color: #fff;
          transition: color ease-in-out .5s;
        }

        .visit-link {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .visit-btn {
          padding: 12px 24px; /* Increased padding */
          background: linear-gradient(120deg, #ADD8E6, #0000FF); /* Blue gradient */
          color: #fff;
          text-decoration: none;
          border-radius: 25px; /* Rounded corners */
        }

        .product-card.hovered {
          background: #000000; /* Change back to black */
          box-shadow: inset 0 0 0 transparent, 
                      inset 0 0 0 transparent, 
                      inset 0 0 0 transparent, 
                      inset 0 0 0 transparent, 
                      0 0 20px rgba(0, 0, 0, 0.6); 
        }

        .product-card.hovered .title {
          color: transparent;
        }
      `}</style>
    </Section>
  );
};

export default Services;
