import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import settings from './setting.png'


export const Sitebar = () => {
  return (
    <div className="sidebar">
      <a className="logo">
        <div className="circle">
          <div className="square"></div>
        </div>
        <div>Dashboard Kit</div>
      </a>
      <ul className="sidebar-content">
        <li>
          <img src="../../assets/img/settings.png" alt="" />
          <NavLink to="/admin/overview">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/admin/tickets">Tickets</NavLink>
        </li>
        <li>
          <NavLink to="/admin/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/admin/settings">Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};
