import { NavLink } from "react-router-dom";

import {
  contacts,
  overview,
  settings,
  tickets,
} from "assets/img/sidebar";

import s from './Sidebar.module.scss';

export const Sidebar = () => {
  
  return (
    <div className={s.sidebarWrapper}>
      <div className={s.logo}>
        <div className={s.circle}>
          <div className={s.square}></div>
        </div>
        <div>Dashboard Kit</div>
      </div>
      <ul className={s.sidebarList}>
        <li>
          <NavLink className={({ isActive }) => (isActive ? s.active : null) + ' ' + s.link} to="/admin/overview">
            <img src={overview} alt="overview icon" className="filter-gray" />{" "}
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? s.active : null) + ' ' + s.link} to="/admin/tickets">
            <img src={tickets} alt="tickets icon" />
            Tickets
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? s.active : null) + ' ' + s.link} to="/admin/contacts">
            <img src={contacts} alt="contacts icon" />
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? s.active : null) + ' ' + s.link} to="/admin/settings">
            <img src={settings} alt="settings icon" />
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
