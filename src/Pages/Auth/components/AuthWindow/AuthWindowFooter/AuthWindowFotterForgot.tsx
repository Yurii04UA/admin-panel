import { useNavigate } from "react-router-dom";

import s from './AuthWindowFooter.module.scss';

export const AuthWindowFotterForgot = () => {
  const navigate = useNavigate();
  const redirectHandler = (url: string) => {
    navigate(url);
  };

  return (
    <div className={s.btnWrapper}>
      <div>Forgot your password?</div>
      <button
        onClick={() => redirectHandler("/forgot-password")}
        className={s.btnFooter}>
        Click!
      </button>
    </div>
  );
};
