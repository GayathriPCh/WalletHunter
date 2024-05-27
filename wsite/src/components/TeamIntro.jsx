import React from 'react';
import styled from 'styled-components';
import founderImage from '../assets/founder.jpg';
import cofounderImage from '../assets/cofounder.jpg';
import linkedinIcon from '../assets/socials/linkedin.svg';
import twitterIcon from '../assets/socials/twitter.svg';

// Styled components
const TeamSection = styled.section`
  text-align: center;
  padding: 50px 0; /* Added padding for space on the page */
`;

const TeamHeadText = styled.h1`
  font-size: 36px; /* Bigger font size */
  font-weight: bold;
  background: linear-gradient(90deg, #8e2de2, #4a00e0); /* Black purple gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px; /* More space after the title */
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  gap: 40px; /* Space between cards */
  margin: 20px auto;
`;

const Card = styled.div`
  width: 350px; /* Increased width */
  min-height: 450px; /* Increased height */
  background-image: linear-gradient(-225deg, #77FFD2 0%, #6297DB 48%, #1EECFF 100%);
  border-radius: 20px;
  padding: 40px; /* Increased padding */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white; /* White text */
`;

const TeamImageWrapper = styled.div`
  width: 220px; /* Adjusted width */
  height: 220px; /* Adjusted height */
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px; /* Increased bottom margin */
  position: relative;
  border: 5px solid #00f0ff;
  display: inline-block;
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.p`
  font-size: 24px; /* Bigger font size */
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #8e2de2, #4a00e0); /* Black purple gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Position = styled.p`
  font-size: 20px; /* Adjusted font size */
  color: white;
  margin-bottom: 15px;
`;

const FeatureText = styled.p`
  font-size: 18px; /* Adjusted font size */
  color: white;
  margin-bottom: 20px; /* Increased margin */
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px; /* Increased margin between icons */
`;

const TeamIntro = () => {
  return (
    <TeamSection id="team">
      <TeamHeadText>Meet Our Team</TeamHeadText>
      <CardContainer>
        <Card>
          <TeamImageWrapper>
            <TeamMemberImage src={founderImage} alt="Founder" />
          </TeamImageWrapper>
          <Name>Krutika Lodaya</Name>
          <Position>Founder</Position>
          <FeatureText>Passionate about Web 3.0 Segmentation and Wallet Profiling. Founder, speaker and Investor.</FeatureText>
          <SocialIcons>
            <a href="https://www.linkedin.com/in/krutika-lodaya/" target="_blank" rel="noopener noreferrer">
              <SocialIcon src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://x.com/krutikslodaya" target="_blank" rel="noopener noreferrer">
              <SocialIcon src={twitterIcon} alt="Twitter" />
            </a>
          </SocialIcons>
        </Card>
        {/* Add more Card components for additional team members */}
        <Card>
          <TeamImageWrapper>
            <TeamMemberImage src={cofounderImage} alt="Co-founder" />
          </TeamImageWrapper>
          <Name>Jozef Jagan</Name>
          <Position>Co-Founder</Position>
          <FeatureText>Web3 enthusiast and strategist, contributing to 7 diverse projects with a focus on go-to-market strategy and tokenomics.</FeatureText>
          <SocialIcons>
            <a href="https://www.linkedin.com/in/jozefjagan/" target="_blank" rel="noopener noreferrer">
              <SocialIcon src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://x.com/JozefJagan" target="_blank" rel="noopener noreferrer">
              <SocialIcon src={twitterIcon} alt="Twitter" />
            </a>
          </SocialIcons>
        </Card>
      </CardContainer>
    </TeamSection>
  );
};

export default TeamIntro;
