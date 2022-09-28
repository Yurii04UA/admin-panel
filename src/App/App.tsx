import "./App.scss";
import { Login } from "../Pages/Auth/Login";
import { Registration } from "../Pages/Auth/Registration";
import { Route, Routes } from "react-router-dom";
import { ForgotPass } from "../Pages/Auth/ForgotPass";
import { Sitebar } from "../Pages/Sidebar";
import { Overview } from "../Pages/Overview";
import { Tickets } from "../Pages/Tickets";
import { Contacts } from "../Pages/Contacts";
import { Settings } from "../Pages/Settings";

export const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <Sitebar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin/overview" element={<Overview />} />
          <Route path="/admin/tickets" element={<Tickets />} />
          <Route path="/admin/contacts" element={<Contacts />} />
          <Route path="/admin/settings" element={<Settings />} />

          <Route path="*" element={<div> error </div>} />
        </Routes>
      </div>
    </div>
  );
};
