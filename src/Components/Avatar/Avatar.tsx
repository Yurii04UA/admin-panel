import { unknownAvatar } from "../../assets/img/avatar";
import { useAvatar } from "../../Hooks/useAvatar";

import s from './Avatar.module.scss';

export const Avatar = () => {
  const { avatarUrl,isChangeAvatar} = useAvatar();
  return (

    <div className={s.avatar}>
      <img src={isChangeAvatar && avatarUrl? avatarUrl : unknownAvatar} alt="avatar" />
    </div>
  );
};
