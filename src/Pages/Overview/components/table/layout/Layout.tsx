import React from "react";

import { Title } from "../title";

import s from './Layout.module.scss';

interface ILayout {
  children: React.ReactNode
  title: string;
  description: string;
  onCLick?: () => void;
  btnTitle: string;
}

export const Layout:React.FC<ILayout> = ({ children, title, description, btnTitle, onCLick }) => {
  return (
    <div className={s.overviewLayout}>
      <Title 
        title={title} 
        description={description} 
        btnTitle={btnTitle} 
        onCLick={onCLick}
      />
      {children}
    </div>
  );
};
