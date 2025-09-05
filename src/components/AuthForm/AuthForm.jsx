import './AuthForm.css';

export default function AuthForm({ children, title, onSubmit }) {
  return (
    <div className="auth-form-container">
      <h2 className="auth-form-title">{title}</h2>
      <form className="auth-form" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}
