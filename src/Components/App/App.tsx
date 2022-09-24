import { HomePage } from "../../Pages/HomePage/index";
import { Login } from "../../Pages/Login/Login";
import { Registration } from "../../Pages/Registration/Registration";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ForgotPass from "../../Pages/ForgotPass/ForgotPass";
import { Sitebar } from "../../Pages/Sitebar";
import { Overview } from "../../Pages/Overview/Overview";

function App() {
  return (
    <div className="App">
      <Sitebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin-dashboard/overview" element={<Overview />} />
          <Route path="/admin-dashboard" element={<HomePage />} />

          <Route path="*" element={<div> error </div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
