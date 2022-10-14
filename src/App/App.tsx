import React from "react";
import { Login, Registration, ForgotPass } from "../Pages/Auth";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import { AvatarProvider } from "../Context/AvatarContext";

import { Overview } from "../Pages/Overview";
import { Tickets } from "../Pages/Tickets";
import { Contacts } from "../Pages/Contacts";

import { Settings } from "../Pages/Settings";
import { LayoutSidebar } from "../Components/Layouts/LayoutSidebar";
import { RequiredAuth } from "../HOC/RequiredAuth";

import "./App.scss";

export const App = () => {
  return (
    <div className="App">
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
