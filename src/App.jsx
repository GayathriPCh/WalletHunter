import React from 'react';
import './App.css'; // Import the CSS file
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import FadeInSection from "./components/FadeInSection";
import AboutUsPage from "./components/AboutUsPage";
import TeamIntro from './components/TeamIntro';
import FAQPage from './components/FAQPage'; // Import the FAQPage component

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <FadeInSection><Hero /></FadeInSection>
        <FadeInSection><Benefits /></FadeInSection>
        <FadeInSection><AboutUsPage /></FadeInSection>
        <FadeInSection><Services /></FadeInSection>
        <FadeInSection><FAQPage /></FadeInSection> {/* Add FAQPage component */}
        <FadeInSection><TeamIntro /></FadeInSection>
        <FadeInSection><Contact /></FadeInSection>
        <Footer />
      </div>

      <ButtonGradient />
      <CustomCursor />
    </>
  );
};

export default App;
