import "./AuthWindowFooter.scss";
import { AuthWindowFotterForgot } from "./AuthWindowFotterForgot";

interface IForgot{
  isForget: boolean
}

const AuthWindowFooter = ({isForget}: IForgot) => {
  return (
    <div className="footer">
      {isForget? <AuthWindowFotterForgot />: null}
      <div className="btn-wrapper">
        <div>Don't have an account?</div>
        <button className="btn-footer">Sing up</button>
      </div>
    </div>
  );
};

export default AuthWindowFooter;
