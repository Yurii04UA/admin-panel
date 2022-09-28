import { AddTasks } from "./AddTasks";
import { TasksList } from "./TasksList";
import { useState } from "react";
import uuid from 'react-uuid';
import "./OverviewTasks.scss";

export const OverviewTasks = () => {
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
  const [tasks, setTasks] = useState(data);
 
  
  return (
    <div className="overview-tasks">
      <AddTasks />
      <TasksList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};
