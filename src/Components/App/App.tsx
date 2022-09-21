import React, { useState } from 'react';
import HomePage from '../../Pages/HomePage/HomePage';
import { Login } from '../../Pages/Login/Login';
import AuthWindow from '../Auth/AuthWindow/AuthWindow';
import './App.scss'

function App() {
  const [isLogin,setIsLogin] = useState(false);
  return (
    <div className='App'>
      {isLogin? <HomePage /> : <Login setValue={setIsLogin} value={isLogin} />}
    </div>
  );
}

export default App;
