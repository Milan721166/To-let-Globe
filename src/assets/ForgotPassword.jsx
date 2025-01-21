import React from 'react';
import { Mail, Lock } from 'lucide-react'; 
import { Link } from 'react-router-dom'; 
import './login.css';

function ForgotPassword() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form>
        <div className="login_form_container">
          <div className="login_form"> {}
            <h2 className="text-2xl font-semibold">Forgot Password</h2>
            <div className="input_group">
              <Mail className="icon" /> {}
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
              <Lock className="icon" /> {}
              <input
                type="text"
                placeholder="Your first school"
                className="input_text"
                autoComplete="off"
                required
              />
            </div>
            <div className="button_group" id="login_button">
              <button type="submit">
                SEND RESET LINK
              </button>
            </div>
            <div className="fotter">
              <Link to="/register">Register</Link>
              <Link to="/">Login</Link> {}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
