import React, { useState } from 'react';
import Section from "./Section";
import Heading from "./Heading";
import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  0% {
    background-position: -200px;
  }
  100% {
    background-position: 200px;
  }
`;

const ShiningButton = styled.a`
  padding: 16px 32px;
  background: linear-gradient(to bottom right, #88d3ce, #6e45e2);
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease-in-out; /* Smooth transition for background color */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${shine} 2s infinite linear;
`;

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
            <p className="title">Telegram <br /> <br />Trends<br /><br /> Analyzer</p>
            {hovered && (
              <ShiningButton href="https://telegramtrends.xyz" className="visit-btn">
                Visit Website
              </ShiningButton>
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
          width: 480px;
          height: 380px;
          border: none;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          background: #fff;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.6); 
          transition: box-shadow 0.3s ease-in-out; /* Smooth transition for box-shadow */
        }

        .title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          color: transparent;
          background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
          -webkit-background-clip: text;
          background-clip: text;
          transition: color 0.3s ease-in-out; /* Smooth transition for text color */
        }

        .product-card.hovered {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0); /* Change box-shadow when hovered */
        }

        .product-card.hovered .title {
          color: #fff; /* Change text color when hovered */
        }
      `}</style>
    </Section>
  );
};

export default Services;
