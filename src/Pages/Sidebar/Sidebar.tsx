import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import {
  contacts,
  overview,
  settings,
  tickets,
} from "../../assets/img/sidebar";

export const Sitebar = () => {
  return (
    <div className="sidebar-wrapper">
      <a className="logo">
        <div className="circle">
          <div className="square"></div>
        </div>
        <div>Dashboard Kit</div>
      </a>
      <ul className="sidebar-list">
        <li>
          <NavLink className='link' to="/admin/overview">
            <img src={overview} alt="overview icon" className="filter-gray" />{" "}
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to="/admin/tickets">
            <img src={tickets} alt="tickets icon" />
            Tickets
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to="/admin/contacts">
            <img src={contacts} alt="contacts icon" />
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to="/admin/settings">
            <img src={settings} alt="settings icon" />
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
