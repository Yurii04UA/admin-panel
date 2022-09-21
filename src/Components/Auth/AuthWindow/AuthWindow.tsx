import React from "react";
import Logo from "../../Logo/Logo";
import AuthBodyTitle from "./AuthBodyTitle/AuthBodyTitle";
import "./AuthWindow.scss";
import AuthWindowFooter from "./AuthWindowFooter/AuthWindowFotter";

interface IAuthWindow {
  children: React.ReactNode;
  isFooter: boolean;
  isForgot: boolean;
  title: {
    title: string;
    subtitle: string;
  };
}

const AuthWindow = ({ children, isFooter, title, isForgot }: IAuthWindow) => {
  return (
    <>
      <div className="auth" />
      <div className="auth-box">
        <Logo />
        <AuthBodyTitle title={title.title} subTitle={title.subtitle} />
        {children}
        {isFooter && <AuthWindowFooter isForget={isForgot} />}
      </div>
    </>
  );
};

export default AuthWindow;
