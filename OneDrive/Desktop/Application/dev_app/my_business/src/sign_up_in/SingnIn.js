import React, { useState } from 'react';
import "./SignInUp.css";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validate = () => {
    const errors = {};
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log("Attempting login with username:", username);
        const response = await axios.get('/login',{mobile: username, password: password});
        console.log("response", response);
        setError({});
      } catch (err) {
        console.error("Login error: ", err.response ? err.response.data : err.message);
        setError({ server: 'Failed to login. Please check your credentials and try again.' });
      }
    } else {
      setError(validationErrors);
    }
  };

  return (
    <div className='login-form'>
      <form onSubmit={handleLogin}>
        <h2>Log In</h2>
        <div className='form-group'>
          <label htmlFor='username'>User Name</label>
          <input
            type='text'
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {error.username && <p className="error">{error.username}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error.password && <p className="error">{error.password}</p>}
        </div>
        <button type='submit' className='login-button'>
          Submit
        </button>
        {error.server && <p className="error">{error.server}</p>}
      </form>
      <a className='forgot' href='##'>Forgot Username?</a>
      <a className='forgot' href='##'>Forgot Password?</a>
    </div>
  );
};

export default SignIn;
