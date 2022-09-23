import React from "react";
interface ITitle {
  title: string;
  subTitle: string;
}

export const AuthBodyTitle = ({ title, subTitle }: ITitle) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

