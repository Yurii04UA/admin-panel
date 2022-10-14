import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "context/AuthContext";
import { AvatarProvider } from "context/AvatarContext";

import { Login, Registration, ForgotPass } from "pages/auth";
import { Overview } from "pages/overview";
import { Tickets } from "pages/tickets";
import { Contacts } from "pages/contacts";

import { Settings } from "pages/settings";
import { LayoutSidebar } from "components/layouts/layoutSidebar";
import { RequiredAuth } from "hoc/RequiredAuth";

import s from './App.module.scss';

export const App = () => {
  return (
    <div className={s.App}>
      <AuthProvider>
        <AvatarProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<div> error </div>} />
            <Route element={<LayoutSidebar />}>
              <Route
                path="admin/overview"
                element={
                  <RequiredAuth>
                    <Overview />
                  </RequiredAuth>
                }
              />
              <Route
                path="admin/tickets"
                element={
                  <RequiredAuth>
                    <Tickets />
                  </RequiredAuth>
                }
              />
              <Route
                path="admin/contacts"
                element={
                  <RequiredAuth>
                    <Contacts />
                  </RequiredAuth>
                }
              />
              <Route
                path="admin/settings"
                element={
                  <RequiredAuth>
                    <Settings />
                  </RequiredAuth>
                }
              />
            </Route>
          </Routes>
        </AvatarProvider>
      </AuthProvider>
    </div>
  );
};
