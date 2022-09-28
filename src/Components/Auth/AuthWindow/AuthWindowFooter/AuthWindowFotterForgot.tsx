import { useContext } from "react";
import { Context } from "../../../../Context/Context";

export const AuthWindowFotterForgot = () => {
  const { openForgot } = useContext(Context);
  return (
    <div className="btn-wrapper">
      <div>Forgot your password?</div>
      <button onClick={openForgot} className="btn-footer">
        Click!
      </button>
    </div>
  );
};
