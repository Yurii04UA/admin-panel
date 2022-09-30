import "./AuthWindowFooter.scss";
import { AuthWindowFotterForgot } from "./AuthWindowFotterForgot";
import { useNavigate } from "react-router-dom";
interface IForgot {
  isForget: boolean;
}

export const AuthWindowFooter = ({ isForget }: IForgot) => {
  const navigate = useNavigate();
  const redirectHandler = (url: string) => {
    navigate(url);
  };

  return (
    <div className="footer">
      {isForget ? <AuthWindowFotterForgot /> : null}
      <div className="btn-wrapper">
        <div>Don`t have an account?</div>
        <button
          onClick={() => redirectHandler("/registration")}
          className="btn-footer"
        >
          Sing up
        </button>
      </div>
    </div>
  );
};
