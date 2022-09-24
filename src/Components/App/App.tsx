import { useState, useContext } from "react";
import { Context } from "../../Context/Context";
import { HomePage } from "../../Pages/HomePage/index";
import { Login } from "../../Pages/Login/Login";
import { Registration } from "../../Pages/Registration/Registration";
import { ResetPassword } from "../../Pages/ResetPassword/ResetPassword";

import {Route,Routes} from 'react-router-dom';
import "./App.scss";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const { isRegistr, isForgot } = useContext(Context);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setValue={setIsLogin}/>} />
        <Route path="/admin-dashboard" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
