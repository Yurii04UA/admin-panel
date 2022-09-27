import { HomePage } from "../Pages/HomePage/index";
import { Login } from "../Pages/Auth/Login";
import { Registration } from "../Pages/Auth/Registration";
import { Route, Routes } from "react-router-dom";
import { ForgotPass } from "../Pages/Auth/ForgotPass";
import { Sitebar } from "../Pages/Sidebar";
import { Overview } from "../Pages/Overview/Overview";
import "./App.scss";
import { Tickets } from "../Pages/Tickets/Tickets";
import { Contacts } from "../Pages/Contacts/Contacts";
import { Settings } from "../Pages/Settings/Settings";

function App() {
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
          <Route path="/admin" element={<HomePage />} />

          <Route path="*" element={<div> error </div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
