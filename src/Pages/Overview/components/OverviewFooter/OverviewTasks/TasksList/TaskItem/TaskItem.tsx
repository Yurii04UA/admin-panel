import React from "react";
import { Radio, FormControlLabel } from "@mui/material";

import "./TaskItem.scss";

interface ITaskItemProps {
  value: string;
  status: string;
  onClick?: () => void;
}

export const TaskItem: React.FC<ITaskItemProps> = ({ value, status, onClick }) => {
  let className;
  if (status === "new") {
    className = "taskItemStatusNew";
  } else {
    className = "taskItemStatusDefault";
  }
  return (
    <div className="taskItem">
      <FormControlLabel value={value} control={<Radio />} label={value} onClick={onClick} />
      <div className={className}>{status}</div>
    </div>
  );
};
