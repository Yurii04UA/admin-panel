import { NavLink } from "react-router-dom";

import { Avatar } from "components/avatar";

import s from './Title.module.scss';

interface ITitleProps {
  title: string;
}

export const Title: React.FC<ITitleProps> = ({ title }) => {
  const name = localStorage.getItem('name');
  const lastName = localStorage.getItem('lastName');
  return (
    <div className={s.titleContent}>
      <h2>{title}</h2>
      <NavLink to="/admin/settings">
        <div className={s.titleLogin}>
          <div className={s.name}>{name} {lastName}</div>
          <Avatar />
        </div>
      </NavLink>
    </div>
  );
};
