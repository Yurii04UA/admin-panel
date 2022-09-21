import React, { useState } from 'react';
import ForgotPass from '../../Pages/ForgotPass/ForgotPass';
import { ForgotPassResult } from '../../Pages/ForgotPassResult/ForgotPassResult';
import HomePage from '../../Pages/HomePage/HomePage';
import { Login } from '../../Pages/Login/Login';
import { ResetPassword } from '../../Pages/ResetPassword/ResetPassword';
import AuthWindow from '../Auth/AuthWindow/AuthWindow';
import './App.scss'

function App() {
  const [isLogin,setIsLogin] = useState(false);
  const [isForgot,setIsForgot] = useState(false)
  return (
    <div className='App'>
      {/* {isLogin? <HomePage /> : <Login setValue={setIsLogin} value={isLogin} />} */}
      {/* {isForgot? <ForgotPassResult /> : <ForgotPass setValue={setIsForgot} value={isForgot}/>} */}
      <ResetPassword />
    </div>
  );
}

export default App;
