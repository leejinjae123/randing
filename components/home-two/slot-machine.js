import React, { useState, useEffect } from 'react';

const NumberSpinner = ({ targetNumber }) => {
  const [number, setNumber] = useState(0);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    if (spinning) {
      if (number < targetNumber) {
        setTimeout(() => setNumber(number + 1), 100); // adjust speed here
      } else {
        setSpinning(false);
      }
    }
  }, [number]);

  return (
    <div className="spinner">
      {number.toLocaleString()} {/* Use toLocaleString() to format with commas */}
    </div>
  );
};

export default NumberSpinner;
