import { useNavigate } from "react-router-dom";

export const AuthWindowFotterForgot = () => {
  const navigate = useNavigate();
  const redirectHandler = (url: string) => {
    navigate(url);
  };

  return (
    <div className="btn-wrapper">
      <div>Forgot your password?</div>
      <button
        onClick={() => redirectHandler("/forgot-password")}
        className="btn-footer"
      >
        Click!
      </button>
    </div>
  );
};
