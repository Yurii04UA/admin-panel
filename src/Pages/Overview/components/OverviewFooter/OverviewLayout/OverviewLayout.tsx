import React from "react";
import { OverviewFooterTitle } from "../OverviewFooterTitle";
import './OverviewLayout.scss';

interface IOverviewLayout {
  children:React.ReactNode
  title: string;
  description: string;
  onCLick?: () => void;
  btnTitle: string;
}

export const OverviewLayout:React.FC<IOverviewLayout> = ({ children, title, description, btnTitle, onCLick }) => {
  return (
    <div className="overview-layout">
      <OverviewFooterTitle 
         title={title} 
         description={description} 
         btnTitle={btnTitle} 
         onCLick={onCLick}
       />
      {children}
    </div>
  );
};
