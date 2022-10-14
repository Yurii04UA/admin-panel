import { useState } from "react";
import { RadioGroup, FormControl } from "@mui/material";

import { TaskItem } from "./TaskItem";


type Tasks = {
  id: string;
  title: string;
  status: string;
};

interface ITasksListProps {
  tasks: Tasks[];
  setTasks: (value: Tasks[]) => void;
}

export const TasksList: React.FC<ITasksListProps> = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");

  const statusTask = (id: string) => {
    const newTasks = [...tasks].filter((task) => {
      if (task.id === id) {
        task.status = "default";
      } else {
        task.status = "new";
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const tasksList = tasks.map((task) => {
    return (
      <TaskItem
        value={task.title}
        status={task.status}
        key={task.id}
        onClick={() => statusTask(task.id)}
      />
    );
  });

  return (
    <>
      <FormControl style={{ width: "100%", fontSize: "14px" }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {tasksList}
        </RadioGroup>
      </FormControl>
    </>
  );
};
