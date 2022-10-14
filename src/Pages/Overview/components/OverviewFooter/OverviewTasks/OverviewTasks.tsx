import { useState } from "react";
import uuid from 'react-uuid';

import { TasksList } from "./TasksList";
import { AddTasks } from "./AddTasks";


const data = [
  {  id: uuid(), 
    title: "Finish ticket update", 
    status: "new", 
  },
  {  id: uuid(), 
    title: "Create new ticket example", 
    status: "new", 
  },
  {  id: uuid(), 
    title: "Update ticket report", 
    status: "new", 
  },
];

const dataShort = [...data.slice(-3)];
export const OverviewTasks = () => {
  const [tasks, setTasks] = useState(dataShort);

  return (
    <>
      <AddTasks tasks={tasks} setTasks={setTasks}/>
      <TasksList tasks={tasks} setTasks={setTasks}/>
    </>
  );
};
