import React from "react";
import { Radio, FormControlLabel } from "@mui/material";

import styles from './TaskItem.module.scss';

interface ITaskItemProps {
  value: string;
  status: string;
  onClick?: () => void;
}

export const TaskItem: React.FC<ITaskItemProps> = ({ value, status, onClick }) => {
  
  let className;
  if (status === "new") {
    className = styles.taskItemStatusNew;
  } else {
    className = styles.taskItemStatusDefault;
  }
  return (
    <div className={styles.taskItem}>
      <FormControlLabel value={value} control={<Radio />} label={value} onClick={onClick} />
      <div className={className}>{status}</div>
    </div>
  );
};
