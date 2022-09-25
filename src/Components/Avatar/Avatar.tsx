import React from "react";
import { avatar, testPhoto } from "../../assets/img/avatar";
import './Avatar.scss';

export const Avatar = () => {
  return (
    <div className="avatar">
      <img src={avatar} alt="avatar" />
    </div>
  );
};
