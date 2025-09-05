import AuthForm from './AuthForm';
import RotatingButton from '../RotatingButton/RotatingButton';

export default function LoginForm({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    onLogin({ email, password });
  };

  return (
    <AuthForm title="Login" onSubmit={handleSubmit}>
    <div className="input-container">
  <input name="email" type="email" placeholder=" " required />
  <label>Email</label>
</div>

<div className="input-container">
  <input name="password" type="password" placeholder=" " required />
  <label>Password</label>
</div>

      <RotatingButton label="Login" onRotatingButtonClick={() => {}} />
    </AuthForm>
  );
}
