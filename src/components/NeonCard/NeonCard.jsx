import './NeonCard.css';

export default function NeonCard({
  title,
  children,
  onClick,
  className = '',
  style = {}
}) {
  return (
    <div
      className={`neon-card ${className}`}
      style={style}
      onClick={onClick}
    >
      {title && <h3 className="neon-card-title">{title}</h3>}
      <div className="neon-card-content">{children}</div>
    </div>
  );
}
