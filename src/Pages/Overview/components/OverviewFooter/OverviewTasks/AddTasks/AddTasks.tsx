import uuid from "react-uuid";
import { useState } from "react";

import ControlPointIcon from "@mui/icons-material/ControlPoint";

import styles from "./AddTasks.module.scss";

type Tasks = {
  id: string;
  title: string;
  status: string;
}

interface IAddTasksProps {
  tasks: Tasks[];
  setTasks: (value: Tasks[]) => void;
}

export const AddTasks: React.FC<IAddTasksProps> = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const addTask = () => {
    if (value) {
      const newTasks = [...tasks, { id: uuid(), title: value, status: "new" }];
      setTasks(newTasks.slice(-3));
      setValue("");
    }
  };

  return (
    <div className={styles.addTask}>
      <input
        type="text"
        className={styles.input}
        placeholder="Create new task"
        value={value}
        onChange={handleChange}
      />
      <ControlPointIcon className={styles.btnInput} onClick={addTask} />
    </div>
  );
};
