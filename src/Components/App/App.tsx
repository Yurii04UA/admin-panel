import { useState, useContext } from 'react';
import { Context } from '../../Context/Context';
import HomePage from '../../Pages/HomePage/HomePage';
import { Login } from '../../Pages/Login/Login';
import { Registration } from '../../Pages/Registration/Registration';
import { ResetPassword } from '../../Pages/ResetPassword/ResetPassword';
import './App.scss'

function App() {
  const [isLogin,setIsLogin] = useState(false);
  const {isRegistr,isForgot} = useContext(Context);

  return (
    <div className='App'>
      {isLogin? <HomePage /> : <Login setValue={setIsLogin} value={isLogin} />}
      {isForgot? <ResetPassword />: null}
      {isRegistr? <Registration /> : null}
    </div>
  );
}

export default App;
