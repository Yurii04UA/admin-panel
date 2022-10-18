import { AuthWindowFotterForgot } from "./AuthWindowFotterForgot";
import { useNavigate } from "react-router-dom";

import s from './AuthWindowFooter.module.scss';

interface IForgot {
  isForget: boolean;
}

export const AuthWindowFooter: React.FC<IForgot> = ({ isForget }) => {
  const navigate = useNavigate();
  const redirectHandler = (url: string) => {
    navigate(url);
  };

  return (
    <div className={s.footer}>
      {isForget ? <AuthWindowFotterForgot /> : null}
      <div className={s.btnWrapper}>
        <div>Don`t have an account?</div>
        <button
          onClick={() => redirectHandler("/registration")}
          className={s.btnFooter}
        >
          Sing up
        </button>
      </div>
    </div>
  );
};
