import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the zoom animation
const zoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
    animation-timing-function: ease-in;
  } 
  85% {
    opacity: 1;
    transform: scale(2.8);
    animation-timing-function: linear;
  }
  100% {
    opacity: 0;
    transform: scale(3.5);
  }
`;

// Define the keyframes for the shining effect (light purple-blue)
const shineLightPurpleBlue = keyframes`
  0% {
    background-position: -200px;
  }
  100% {
    background-position: 200px;
  }
`;

// Styled components for the about us container and its children
const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 800px;
  padding: 50px;
  text-align: center;
  margin: 0 auto;
  height: 80vh;
`;

// Updated Title styled component with shining animation and new colors
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  background-image: linear-gradient(45deg, #b6a5ff, #87f7ff, #b6a5ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
  display: inline-block;
  animation: ${shineLightPurpleBlue} 2s infinite linear;
  background-size: 200px;
  background-clip: text;
  text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  color: white;
`;

// Styled component for the space div containing stars
const Space = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

// Styled component for stars
const Star = styled.div`
  background-image: radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
                    radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
                    radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
                    radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
                    radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
                    radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: ${zoom} 5s infinite;
  opacity: 0;
`;

const AboutUsPage = () => {
  return (
    <section id="4">
      <AboutUsContainer>
        <Space>
          {/* Stars */}
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </Space>
        <Title>About Us</Title>
        <br></br>
        <br></br>
        {/* About Us Description */}
        <Description>
          Unlock Web3 success with Wallet Hunter – where innovation meets strategy. Crafted personas, tailored marketing, and trusted transitions. Join brands choosing tailored, data-driven triumph.
        </Description>
      </AboutUsContainer>
    </section>
  );
};

export default AboutUsPage;
