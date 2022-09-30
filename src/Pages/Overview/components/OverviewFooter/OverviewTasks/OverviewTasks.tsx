import { useState } from "react";
import uuid from 'react-uuid';

import { TasksList } from "./TasksList";
import { AddTasks } from "./AddTasks";

import "./OverviewTasks.scss";

const data = [
  {  id: uuid(), 
     title: "Finish ticket update", 
     status: "Urgent" 
  },
  {  id: uuid(), 
     title: "Finish ticket update", 
     status: "New" 
  },
  {  id: uuid(), 
     title: "Finish ticket update", 
     status: "Default" 
  },

  ];

export const OverviewTasks = () => {
 
  const [tasks, setTasks] = useState(data);
 
  return (
    <div className="overview-tasks">
      <AddTasks />
      <TasksList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};
