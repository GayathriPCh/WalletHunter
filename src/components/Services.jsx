import React from 'react';
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

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="Our Products" />
        <div className="card-wrapper">
          <div className="product-card">
            <a href="https://telegramtrends.xyz" className="title" target="_blank" rel="noopener noreferrer">
              Telegram Trends
            </a>
            <span className="description">Real-time analysis of trends on Telegram</span>
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
          width: 480px; /* Adjusted width */
          height: 180px; /* Adjusted height */
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.6); 
          transition: box-shadow 0.3s ease-in-out; /* Smooth transition for box-shadow */
          margin: 20px; /* Added margin */
          display: flex;
          justify-content: space-between;
          align-items: center; /* Center content vertically */
          padding: 20px;
          background: none; /* Removed white box background */
        }

        .title {
          font-size: 24px; /* Adjusted font size */
          font-weight: bold;
          color: transparent;
          background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
          -webkit-background-clip: text;
          background-clip: text;
          transition: color 0.3s ease-in-out; /* Smooth transition for text color */
        }

        .description {
          font-size: 14px;
          color: #fff; /* Changed text color to white */
          margin-left: 20px; /* Adjusted margin for positioning */
        }

      

        .product-card:hover .title {
          color: #6a0691; /* Change text color when hovered */
        }
      `}</style>
    </Section>
  );
};

export default Services;
