import { NavLink } from "react-router-dom";

import { Avatar } from "components/avatar";

import s from './Header.module.scss';

interface IHeaderProps {
  title: string;
}

export const Header: React.FC<IHeaderProps> = ({ title }) => {
  const name = localStorage.getItem('name');
  const lastName = localStorage.getItem('lastName');
  return (
    <div className={s.headerContent}>
      <h2>{title}</h2>
      <NavLink to="/admin/settings">
        <div className={s.headerLogin}>
          <div className={s.name}>{name} {lastName}</div>
          <Avatar />
        </div>
      </NavLink>
    </div>
  );
};
