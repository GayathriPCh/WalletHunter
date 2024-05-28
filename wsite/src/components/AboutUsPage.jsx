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

// Define the keyframes for the shining effect
const shine = keyframes`
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
  max-width: 800px; /* Increased max-width */
  padding: 50px;
  background: linear-gradient(135deg, #5EFCE8, #736EFE); /* Updated gradient */
  border-radius: 10px;
  text-align: center;
  margin: 0 auto; /* Center horizontally */
  height: 80vh; /* Decreased height */
  transition: transform 0.8s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  position: absolute;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

// Updated Title styled component with shining animation
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, purple, black);
  -webkit-background-clip: text;
  color: transparent;
  line-height: 1.2; /* Adjust the line height as needed */
  display: inline-block; /* Ensures proper rendering */
  animation: ${shine} 2s linear infinite; /* Shining animation */
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

// Styled component for the list container
const ListContainer = styled.div`
  padding: 40px; /* Adjust padding as needed */
`;

// Styled component for the list
const List = styled.ul`
  text-align: left;
  list-style-type: disc;
`;

const ListItem = styled.li`
  font-size: 1.4rem;
  color: white;
`;

const AboutUsPage = () => {
  return (
    <section id="4">
      <AboutUsContainer>
        <Front>
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
          Unlock Web3 success with Wallet Hunter – where innovation meets strategy. Crafted personas, tailored marketing, and trusted transitions. Join brands choosing tailored, data-driven triumph.          </Description>
        </Front>
        <Back>
          {/* Back Content Goes Here */}
          <Title>What we do</Title>
          <ListContainer>
            <List>
              <ListItem id="0">Expertise at the intersection of innovation and comprehension</ListItem><br></br>
              <ListItem id="1">Artisanal approach to sculpting unique identities for wallet addresses</ListItem><br></br>
              <ListItem id="2">Personalizing personas with tags like “DEX Trader” and “Gaming NFT Whale”</ListItem><br></br>
              <ListItem id="3">Empowering Web3 projects to find like-minded enthusiasts</ListItem><br></br>
              <ListItem id="4">Every wallet becomes a beacon of identity and purpose</ListItem>
            </List>
          </ListContainer>
        </Back>
      </AboutUsContainer>
    </section>
  );
};

export default AboutUsPage;
