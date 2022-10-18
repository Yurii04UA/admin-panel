import { Outlet } from "react-router-dom";
import { RequiredAuth } from "hoc/RequiredAuth";
import { AvatarProvider } from "context/AvatarContext";
import { Sidebar } from "./sidebar";

import s from "./LayoutSidebar.module.scss";

export const LayoutSidebar = () => {
  return (
    <RequiredAuth>
      <AvatarProvider>
        <div className={s.loyautSidebar}>
          <div className={s.sidebar}>
            <Sidebar />
          </div>
          <div className={s.content}>
            <Outlet />
          </div>
        </div>
      </AvatarProvider>
    </RequiredAuth>
  );
};
