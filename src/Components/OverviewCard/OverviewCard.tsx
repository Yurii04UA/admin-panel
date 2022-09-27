import { useState } from "react";
import "./OverviewCard.scss";

interface IOverviewCardProps {
  title: string;
  number: number;
  onClick?: () => void;
  value?: boolean;
}


export const OverviewCard = ({
  title,
  number,
  onClick,
  value,
}: IOverviewCardProps) => {
 
  return (
    <div
      className={value? 'overview-card avtive-card' : 'overview-card'}
      onClick={onClick}
      >
      <h3>{title}</h3>
      <div>{number}</div>
    </div>
  );
};

