import "./AuthWindowFooter.scss";
import { AuthWindowFotterForgot } from "./AuthWindowFotterForgot";
import { useContext } from "react";
import { Context } from "../../../../Context/Context";

interface IForgot {
  isForget: boolean;
}

export const AuthWindowFooter = ({ isForget }: IForgot) => {
  const { openRegistr } = useContext(Context);

  return (
    <div className="footer">
      {isForget ? <AuthWindowFotterForgot /> : null}
      <div className="btn-wrapper">
        <div>Don`t have an account?</div>
        <button onClick={openRegistr} className="btn-footer">
          Sing up
        </button>
      </div>
    </div>
  );
};
