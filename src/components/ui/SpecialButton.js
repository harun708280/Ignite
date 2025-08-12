

const SpecialButton = ({ icon: Icon, name, bgColor, textColor, iconFill }) => {
  return (
    <button
      className="special-button"
      style={{ 
        backgroundColor: bgColor || '#2775FF',  
        color: textColor || '#fff',
      }}
    >
      {Icon && <Icon className="special-button-icon" style={{ fill: iconFill || '#fff' }} />}
      <span className="special-button-text">{name}</span>
    </button>
  );
};

export default SpecialButton;
