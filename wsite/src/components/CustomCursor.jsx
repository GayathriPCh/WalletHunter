import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const smallCircleRef = useRef(null);
  const blendCircleRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const smallCircle = smallCircleRef.current;
    const blendCircle = blendCircleRef.current;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      smallCircle.style.left = `${x}px`;
      smallCircle.style.top = `${y}px`;
      // Position the blend circle slightly behind the small circle
      blendCircle.style.left = `${x - 10}px`; // Adjust this value as needed for the trailing effect
      blendCircle.style.top = `${y - 10}px`; // Adjust this value as needed for the trailing effect
    };

    const handleHover = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button") {
        cursor.style.opacity = "0.7"; // Make cursor slightly transparent
        smallCircle.style.opacity = "0.7"; // Make small circle slightly transparent
        blendCircle.style.opacity = "0.7"; // Make blend circle slightly transparent
      } else {
        cursor.style.opacity = "1"; // Restore opacity if not hovering over a link or button
        smallCircle.style.opacity = "1"; // Restore opacity for small circle
        blendCircle.style.opacity = "1"; // Restore opacity for blend circle
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHover);

    document.body.style.cursor = "none"; // Hide the default cursor

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
      document.body.style.cursor = ""; // Reset the cursor on cleanup
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    width: "80px", // Size of the cursor
    height: "80px", // Size of the cursor
    borderRadius: "50%",
    backgroundColor: "rgba(112, 7, 240, 0.8)", // Purple background with transparency
    mixBlendMode: "difference", // Make text visible through the cursor
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
    transition: "opacity 0.2s ease, transform 0.2s ease",
  };

  const smallCircleStyle = {
    position: "fixed",
    width: "10px", // Size of the small circle
    height: "10px", // Size of the small circle
    borderRadius: "50%",
    backgroundColor: "white", // White background
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 1001, // Slightly higher z-index than the blend mode circle
    transition: "opacity 0.2s ease, transform 0.2s ease",
  };

  const blendCircleStyle = {
    position: "fixed",
    width: "20px", // Size of the blend circle
    height: "20px", // Size of the blend circle
    borderRadius: "50%",
    backgroundColor: "rgba(112, 7, 240, 0.8)", // Purple background with transparency
    mixBlendMode: "difference", // Make text visible through the cursor
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 999, // Lower z-index than the small circle
    transition: "opacity 0.2s ease, transform 0.2s ease",
  };

  return (
    <>
      <div ref={cursorRef} style={cursorStyle}></div>
      <div ref={smallCircleRef} style={smallCircleStyle}></div>
      <div ref={blendCircleRef} style={blendCircleStyle}></div>
    </>
  );
};

export default CustomCursor;
