import { Sidebar } from "components/sidebar";
import { Outlet } from "react-router-dom";


import s from './LayoutSidebar.module.scss';

export const LayoutSidebar = () => {
  return (
    <div className={s.loyautSidebar}>
      <div className={s.sidebar}>
        <Sidebar />
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
};
