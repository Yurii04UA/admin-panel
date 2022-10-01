import { avatar } from "../../assets/img/avatar";

import s from './Avatar.module.scss';

export const Avatar = () => {
  return (
    <div className={s.avatar}>
      <img src={avatar} alt="avatar" />
    </div>
  );
};
