import './RotatingButton.css';

function RotatingButton({
  label,
  onRotatingButtonClick,
  variant = 'primary',
  className = '',
  style = {},
  disabled = false
}) {
  return (
    <button
      className={`rotating-button ${variant} ${className}`}
      style={style}
      onClick={onRotatingButtonClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default RotatingButton;
