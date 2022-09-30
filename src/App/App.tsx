import { Login, Registration, ForgotPass } from "../Pages/Auth";
import { Route, Routes } from "react-router-dom";

import { Overview } from "../Pages/Overview";
import { Tickets } from "../Pages/Tickets";
import { Contacts } from "../Pages/Contacts";
import { Settings } from "../Pages/Settings";

import { LayoutSidebar } from "../Components/Layouts/LayoutSidebar";

import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<div> error </div>} />

        <Route element={<LayoutSidebar />}>
          <Route path="admin/overview" element={<Overview />} />
          <Route path="admin/tickets" element={<Tickets />} />
          <Route path="admin/contacts" element={<Contacts />} />
          <Route path="admin/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};
