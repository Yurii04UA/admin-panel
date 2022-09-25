import { NavLink } from "react-router-dom";
import { Avatar } from "../Avatar";
import "./Title.scss";

interface ITitleProps {
  title: string;
}

export const Title = ({ title }: ITitleProps) => {
  return (
    <div className="title-content">
      <h2>{title}</h2>
      <NavLink to="/admin/settings">
        <div className="title-login">
          <div className="name">Jones Ferdinand</div>
          <Avatar />
        </div>
      </NavLink>
    </div>
  );
};
