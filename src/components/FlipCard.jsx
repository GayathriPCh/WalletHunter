import React from 'react';

const FlipCard = ({ flipped, onFlip, frontContent, backContent }) => {
  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={onFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
