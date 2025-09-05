import AuthForm from './AuthForm';
import RotatingButton from '../RotatingButton/RotatingButton';

export default function SignupForm({ onSignup }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    onSignup({ name, email, password });
  };

  return (
    <AuthForm title="Sign Up" onSubmit={handleSubmit}>
      <div className="input-container">
        <input name="name" type="text" placeholder=" " required />
        <label>Full Name</label>
      </div>

      <div className="input-container">
        <input name="email" type="email" placeholder=" " required />
        <label>Email</label>
      </div>

      <div className="input-container">
        <input name="password" type="password" placeholder=" " required />
        <label>Password</label>
      </div>

      <RotatingButton
        label="Sign Up"
        onRotatingButtonClick={() => {}}
      />
    </AuthForm>
  );
}
