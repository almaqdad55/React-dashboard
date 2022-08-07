import React from 'react';

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      className={`text-${size}`}
      type="button"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
    >
      Button
    </button>
  );
};

export default Button;
