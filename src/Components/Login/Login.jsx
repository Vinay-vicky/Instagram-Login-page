import React from 'react';
import './Login.css';
import logo from './logo.png';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" width="200" height="200" />
        <input type="text" placeholder="Username" className="input-box" />
        <input type="password" placeholder="Password" className="input-box" />
        <button className="login-button">Log In</button>
        <p className="forgot-password">Forgot password?</p>
        <div className="signup-option">
          <p>Don't have an account? <span className="signup-link">Sign up</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;















































// import React from 'react'
// import './Login.css'

// const Login = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form action="" method='post'>
//         <div>
//             <label htmlFor="">Name</label>
//             <input type="text" name='' id='' />
//         </div>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Login
