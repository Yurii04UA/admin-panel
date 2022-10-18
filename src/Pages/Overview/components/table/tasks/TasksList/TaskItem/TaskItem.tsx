import React from "react";

import { Radio, FormControlLabel } from "@mui/material";

import s from "./TaskItem.module.scss";

interface ITaskItemProps {
  value: string;
  status: string;
  onClick?: () => void;
}

export const TaskItem: React.FC<ITaskItemProps> = ({
  value,
  status,
  onClick,
}) => {
  let className;
  if (status === "new") {
    className = s.taskItemStatusNew;
  } else {
    className = s.taskItemStatusDefault;
  }
  return (
    <div className={s.taskItem}>
      <FormControlLabel
        value={value}
        control={<Radio />}
        label={value}
        onClick={onClick}
      />
      <div className={className}>{status}</div>
    </div>
  );
};
