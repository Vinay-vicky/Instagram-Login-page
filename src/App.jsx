import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;









































































// import React from 'react'
// import Login from './Components/Login/Login'
// import Signup from './Components/Signup/Signup'
// // import Home from './Components/Home/Home'

// const App = () => {
//   const isLogin = true
//   return (
//     <div>
//         { isLogin ? <Login/> : <Signup/> }
//     </div>
//   )
// }

// export default App
