import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import logo from './logo.png';

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" width="200"/>
        <input type="text" placeholder="Username" className="input-box" />
        <input type="password" placeholder="Password" className="input-box" />
        <button className="login-button">Log In</button>
        <p className="forgot-password">Forgot password?</p>
        <div className="signup-option">
          <p>
            Don't have an account? <br />
            <span 
              className="signup-link" 
              onClick={() => navigate('/signup')} // Navigate to Signup page
              style={{ cursor: 'pointer', color: 'blue' }}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;




























// import React from 'react';
// import './Login.css';
// import logo from './logo.png';

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <img src={logo} alt="Logo" width="200" height="200" />
//         <input type="text" placeholder="Username" className="input-box" />
//         <input type="password" placeholder="Password" className="input-box" />
//         <button className="login-button">Log In</button>
//         <p className="forgot-password">Forgot password?</p>
//         <div className="signup-option">
//           <p>Don't have an account? <br /> <span className="signup-link">Sign up</span></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;