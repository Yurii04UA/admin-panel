import React from "react";
import { OverviewFooterTitle } from "../OverviewFooterTitle";
import './OverviewLayout.scss';

interface IOverviewLayout {
  children: React.ReactNode;
  title: string;
  description: string;
  onCLick?: () => void;
  btnTitle: string;
}

export const OverviewLayout = ({ children, title, description, btnTitle, onCLick }: IOverviewLayout) => {
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
