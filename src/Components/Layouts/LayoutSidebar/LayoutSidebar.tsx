import { Outlet } from "react-router-dom";

import { Sidebar } from "../../Sidebar";

import "./LayoutSidebar.scss";

export const LayoutSidebar = () => {
  return (
    <div className="loyaut-sidebar">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
