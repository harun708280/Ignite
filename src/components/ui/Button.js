import React from 'react';
import './Button.scss';

const Button = ({ icon: Icon, name, bgColor }) => {
  return (
    <button
      className="custom-button"
      style={{ backgroundColor: bgColor || '#fff' }}
    >
      {Icon && <Icon className="button-icon" />}
      <span className="button-text">{name}</span>
    </button>
  );
};

export default Button;
