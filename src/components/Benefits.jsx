import React from 'react';
import styled, { keyframes } from 'styled-components';
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

// Keyframes for the shine animation
const shine = keyframes`
  0% {
    background-position: -200px;
  }
  100% {
    background-position: 200px;
  }
`;

// Styled component for the title text with the shine effect
const ShiningTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
  background: linear-gradient(to right, #21d4fd, #c0c0ff, #b721ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  animation: ${shine} 2s infinite linear;
`;

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Seamlessly Providing High Quality Services In "
        />

        <div className="flex flex-wrap justify-between gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="benefit-card block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] w-full md:w-auto hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
                flex: "1 0 30%", // Set flex-basis to 30% to allow 3 cards per row
              }}
              key={item.id}
              data-image={item.imageUrl}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <ShiningTitle className="h5 mb-5">{item.title}</ShiningTitle>
                <p className="body-2 mb-6 text-n-3 text-white">{item.text}</p>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
