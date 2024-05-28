const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#A58FFF" /> {/* Purple color */}
          <stop offset="100%" stopColor="#87F7FF" /> {/* Light blue color */}
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#D87CEE" /> {/* Dark purple color */}
          <stop offset="100%" stopColor="#87F7FF" /> {/* Light blue color */}
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#87F7FF" /> {/* Light blue color */}
          <stop offset="100%" stopColor="#A58FFF" /> {/* Purple color */}
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#87F7FF" /> {/* Light blue color */}
          <stop offset="100%" stopColor="#D87CEE" /> {/* Dark purple color */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
