import React, { useEffect, useRef } from "react";
import cursorImage from "./cursor.png";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    // Hide both hand and arrow cursors
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "";
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    width: "70px", // Increase width to 64px
    height: "70px", // Increase height to 64px
    backgroundImage: `url(${cursorImage})`,
    backgroundSize: "contain",
    zIndex: 1000,
    cursor: "none", // Hide both hand and arrow cursors
    pointerEvents: "none", // Ensure the cursor doesn't interfere with pointer events
  };

  return <div ref={cursorRef} style={cursorStyle}></div>;
};

export default CustomCursor;
