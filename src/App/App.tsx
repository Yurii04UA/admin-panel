import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "context/AuthContext";
import { Login, Registration, ForgotPass } from "pages/auth";
import { Overview } from "pages/overview";
import { Tickets } from "pages/tickets";
import { Contacts } from "pages/contacts";
import { LayoutSidebar } from "layouts/layoutSidebar";
import { Settings } from "pages/settings";
import { PageNotFound } from "pages/pageNotFound/PageNotFound";

import s from "./App.module.scss";

export const App = () => {
  return (
    <div className={s.App}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/registration" element={<Registration />} />
          <Route element={<LayoutSidebar />}>
            <Route path="admin/overview" element={<Overview />} />
            <Route path="admin/tickets" element={<Tickets />} />
            <Route path="admin/contacts" element={<Contacts />} />
            <Route path="admin/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};
