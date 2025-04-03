import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css';
import logo from './logo.png';

const Signup = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* <div className='box-1-logo'> */}
          <img src={logo} alt="Logo" width="200" />
        {/* </div> */}
        <input type="text" placeholder="Full Name" className="input-box" />
        <input type="text" placeholder="Username" className="input-box" />
        <input type="email" placeholder="Email" className="input-box" />
        <input type="password" placeholder="Password" className="input-box" />
        <button className="signup-button">Sign Up</button>
        <div className="login-option">
          <p>
            Have an account? <br /> 
            <span 
              className="login-link" 
              onClick={() => navigate('/login')} // Navigate to Login page
              style={{ cursor: 'pointer', color: 'blue' }}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

































































// import React from 'react';
// import './Signup.css';
// import logo from './logo.png';

// const Signup = () => {
//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <div className='box-1-logo'>
//         <img src={logo} alt="Logo" width="200" />
//         </div>
//         {/* <h2 className="instagram-logo">Instagram</h2> */}
//         <input type="text" placeholder="Full Name" className="input-box" />
//         <input type="text" placeholder="Username" className="input-box" />
//         <input type="email" placeholder="Email" className="input-box" />
//         <input type="password" placeholder="Password" className="input-box" />
//         <button className="signup-button">Sign Up</button>
//         <div className="login-option">
//           <p>Have an account? <br /> <span className="login-link">Log in</span></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;




