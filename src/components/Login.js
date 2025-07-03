import { useState } from 'react';
import localStorageUtils from '../utils/localStorage';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorageUtils.saveUser(username.trim());
      onLogin(username.trim());
    } else {
      setError('Please enter a username');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>📋 Personal Task Tracker</h1>
        <p>Welcome! Please enter your username to continue.</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError('');
              }}
              className={error ? 'error' : ''}
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          
          <button type="submit" className="login-btn">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;