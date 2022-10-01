import React from "react";

import { Logo } from "../../../../Components/Logo";
import { AuthBodyTitle } from "./AuthBodyTitle";
import { AuthWindowFooter } from "./AuthWindowFooter";

import s from './AuthWindow.module.scss';

type Title = {
  title: string;
  subtitle: string;
}

interface IAuthWindow {
  children: React.ReactNode;
  isFooter: boolean;
  isForgot: boolean;
  title: Title
}

export const AuthWindow: React.FC<IAuthWindow> = ({ children, isFooter, title, isForgot }) => {
  return (
    <>
      <div className={s.auth} />
      <div className={s.authBox}>
        <Logo />
        <AuthBodyTitle title={title.title} subTitle={title.subtitle}/>
        {children}
        {isFooter && <AuthWindowFooter isForget={isForgot} />}
      </div>
    </>
  );
};

