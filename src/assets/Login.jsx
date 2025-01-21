import React from 'react';
import { Mail, Lock } from 'lucide-react'; 
import './Login.css';
import { Link } from 'react-router-dom'; 
import ForgotPassword from './ForgotPassword'
function Login() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form>
        <div className="login_form_container">
          <div className="login_form">
            <h2 className="text-2xl font-semibold">Login</h2>
            <div className="input_group">
              <Mail className="icon" /> {/* Email Icon */}
              <input 
                type="email"
                placeholder="Email"
                className="input_text"
                autoComplete="off"
                id="exampleInputEmail1"
                required
              />
            </div>
            <div className="input_group">
              <Lock className="icon" /> {/* Lock Icon */}
              <input
                type="password"
                placeholder="Password"
                className="input_text"
                autoComplete="off"
                required
              />
            </div>
            <div className="button_group" id="login_button">
              <button type="submit">
                LOGIN
              </button>
            </div>
            <div className="fotter">
            <Link to="/forgot-password">Forgot Password?</Link>
              <a href="/register">Register</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
