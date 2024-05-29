import React, { useEffect, useRef } from 'react';
import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const headingSection = headingRef.current;
      if (!headingSection) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const headingSectionTop = headingSection.offsetTop;
      const headingSectionHeight = headingSection.offsetHeight;

      const headingSectionBottom = headingSectionTop + headingSectionHeight;

      // Calculate opacity based on scroll position
      const distanceFromTop = headingSectionTop - scrollTop;
      const opacity = 1 - (distanceFromTop / windowHeight);
      headingSection.style.opacity = opacity > 1 ? 1 : opacity < 0 ? 0 : opacity;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={headingRef}
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
