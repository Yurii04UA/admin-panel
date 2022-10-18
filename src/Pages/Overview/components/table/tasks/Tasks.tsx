import { useState } from "react";

import { TasksList } from "./TasksList";
import { AddTasks } from "./AddTasks";
import { dataTasks } from "./mock/dataTasks";

const dataShort = [...dataTasks.slice(-3)];
export const Tasks = () => {
  const [tasks, setTasks] = useState(dataShort);

  return (
    <>
      <AddTasks tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </>
  );
};
