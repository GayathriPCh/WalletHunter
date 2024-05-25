import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useEffect, useRef } from "react";

const cursorStyles = {
  cursor: {
    position: "fixed",
    borderRadius: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    pointerEvents: "none",
    left: "-100px",
    top: "50%",
    zIndex: 1000,
    backgroundColor: "var(--blue)",
    height: 0,
    width: 0,
  },
  cursor2: {
    position: "fixed",
    borderRadius: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    pointerEvents: "none",
    left: "-100px",
    top: "50%",
    zIndex: 1000,
    height: "50px",
    width: "50px",
    transition: "all 200ms ease-out",
    backgroundPosition: "center",
    backgroundSize: "cover",
    border: "2px solid var(--blue)",
    boxShadow: "0 0 12px rgba(16, 39, 112, 0.2)",
  },
  cursor3: {
    position: "fixed",
    borderRadius: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    pointerEvents: "none",
    left: "-100px",
    top: "50%",
    zIndex: 1000,
    height: "50px",
    width: "50px",
    transition: "all 200ms ease-out",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  hover: {
    height: "220px",
    width: "320px",
    borderRadius: "8px",
    boxShadow: "0 0 0 rgba(16, 39, 112, 0.2)",
  },
};

const Benefits = () => {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);
  const cursor3Ref = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursor2 = cursor2Ref.current;
    const cursor3 = cursor3Ref.current;
    let requestId;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      requestId = requestAnimationFrame(() => {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        cursor2.style.left = `${x}px`;
        cursor2.style.top = `${y}px`;
        cursor3.style.left = `${x}px`;
        cursor3.style.top = `${y}px`;
      });
    };

    const addHover = (img) => {
      cursor2.classList.add("hover");
      cursor3.classList.add("hover");
      cursor2.style.backgroundImage = `url(${img})`;
    };

    const removeHover = () => {
      cursor2.classList.remove("hover");
      cursor3.classList.remove("hover");
      cursor2.style.backgroundImage = "";
    };

    document.addEventListener("mousemove", moveCursor);

    document.querySelectorAll(".benefit-card").forEach((card) => {
      card.addEventListener("mouseover", () => addHover(card.dataset.image));
      card.addEventListener("mouseout", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(requestId);
    };
  }, []);

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
              className="benefit-card block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] w-full md:w-auto"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
                flex: "1 0 30%", // Set flex-basis to 30% to allow 3 cards per row
              }}
              key={item.id}
              data-image={item.imageUrl}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
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

      {/* Custom Cursor Elements */}
      <div id="cursor" ref={cursorRef} style={cursorStyles.cursor}></div>
      <div id="cursor2" ref={cursor2Ref} style={cursorStyles.cursor2}></div>
      <div id="cursor3" ref={cursor3Ref} style={cursorStyles.cursor3}></div>

      <style jsx>{`
        .hover {
          height: 220px !important;
          width: 320px !important;
          border-radius: 8px !important;
          box-shadow: 0 0 0 rgba(16, 39, 112, 0.2) !important;
        }
      `}</style>
    </Section>
  );
};

export default Benefits;
