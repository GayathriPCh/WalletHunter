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
      blendCircle.style.left = `${x - 10}px`;
      blendCircle.style.top = `${y - 10}px`;
    };

    const handleHover = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button") {
        cursor.style.opacity = "0.7";
        smallCircle.style.opacity = "0.7";
        blendCircle.style.opacity = "0.7";
        // Apply magnifying effect
        cursor.style.width = "120px";
        cursor.style.height = "120px";
        smallCircle.style.width = "12px";
        smallCircle.style.height = "12px";
        blendCircle.style.width = "24px";
        blendCircle.style.height = "24px";
      } else {
        cursor.style.opacity = "1";
        smallCircle.style.opacity = "1";
        blendCircle.style.opacity = "1";
        // Revert back to normal size
        cursor.style.width = "80px";
        cursor.style.height = "80px";
        smallCircle.style.width = "10px";
        smallCircle.style.height = "10px";
        blendCircle.style.width = "20px";
        blendCircle.style.height = "20px";
      }
    };

    const handleClick = () => {
      cursor.style.width = "60px"; // Adjust this value to change the size of the cursor on click
      cursor.style.height = "60px";
      smallCircle.style.width = "8px"; // Adjust this value to change the size of the small circle on click
      smallCircle.style.height = "8px";
      blendCircle.style.width = "16px"; // Adjust this value to change the size of the blend circle on click
      blendCircle.style.height = "16px";

      // Reset the cursor size after a short delay
      setTimeout(() => {
        cursor.style.width = "80px";
        cursor.style.height = "80px";
        smallCircle.style.width = "10px";
        smallCircle.style.height = "10px";
        blendCircle.style.width = "20px";
        blendCircle.style.height = "20px";
      }, 200); // Adjust this value to change the duration of the size change
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("click", handleClick);

    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("click", handleClick);
      document.body.style.cursor = "";
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "rgba(112, 7, 240, 0.8)",
    mixBlendMode: "difference",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
    transition: "opacity 0.2s ease, transform 0.2s ease, width 0.2s ease, height 0.2s ease", // Include width and height in the transition
  };

  const smallCircleStyle = {
    position: "fixed",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "white",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 1001,
    transition: "opacity 0.2s ease, transform 0.2s ease, width 0.2s ease, height 0.2s ease", // Include width and height in the transition
  };

  const blendCircleStyle = {
    position: "fixed",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "rgba(112, 7, 240, 0.8)",
    mixBlendMode: "difference",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 999,
    transition: "opacity 0.2s ease, transform 0.2s ease, width 0.2s ease, height 0.2s ease", // Include width and height in the transition
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
