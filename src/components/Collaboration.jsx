import { useState } from 'react'; // Import useState hook
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Section from "./Section";

const Collaboration = () => {
  const [isFlipped, setIsFlipped] = useState(false); // State to track flip card status

  return (
    <Section id="4" crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            About us
          </h2>

          {/* Flip card container */}
          <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
            <div className="card__side card__side--front">
              <div className="card__theme">
                <div className="card__theme-box">
                  <h3 className="card__subject">Front Side Title</h3>
                  <h2 className="card__title">Front Side Title</h2>
                </div>
              </div>
            </div>
            <div className="card__side card__side--back">
              <div className="card__cover">
                <h4 className="card__heading">
                  <span className="card__heading-span">Back Side Text</span>
                </h4>
              </div>
              <div className="card__details">
                <ul>
                  <li>Detail 1</li>
                  <li>Detail 2</li>
                  {/* Add more details as needed */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          {/* Add other content */}
          <LeftCurve />
          <RightCurve />
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
