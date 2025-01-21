import React from 'react';
import { Mail, Lock, User,Phone ,Shield} from 'lucide-react'; // Import icons
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Register.css'

function Register() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form>
        <div className="login_form_containe">
          <div className="login_form"> {}
            <h2 className="text-2xl font-semibold">Register</h2>
            <div className="input_group">
              <User className="icon" /> {/* User Icon */}
              <input 
                type="text"
                placeholder="First Name"
                className="input_text"
                autoComplete="off"
                required
              />
            </div>
            <div className="input_group">
              <User className="icon" /> {/* User Icon */}
              <input 
                type="text"
                placeholder="Last Name"
                className="input_text"
                autoComplete="off"
                required
              />
              
            </div>
            <div className="input_group">
              <Phone className="icon" /> {/* User Icon */}
              <input 
                type="number"
                placeholder="Phone Number"
                className="input_text"
                autoComplete="off"
                required
              />
            </div>
            <div className="input_group">
            <Shield className="icon" />
              <select 
                id="userRole" 
                className="Select"
                required
              >
                <option value="" disabled selected>Select your role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="Localuser">Local user</option>
              </select>
            </div>
            <div className="input_group">
              <Mail className="icon" /> {/* Email Icon */}
              <input 
                type="email"
                placeholder="Email"
                className="input_text"
                autoComplete="off"
                required
              />
            </div>
            <div className="input_group">
              <Lock className="icon" /> {/* Password Icon */}
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
                REGISTER
              </button>
            </div>
            <div className="fotter">
              <Link to="/">Login</Link> {/* Navigates back to Login.jsx */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
