import uuid from 'react-uuid';
import './TasksList.scss';

interface ITasksListProps{
  tasks: {
    id: string;
    title: string;
    status: string;
}[]
  setTasks: (value: {
    id: string;
    title: string;
    status: string;
    }[]) => void
//   setTasks:React.Dispatch<React.SetStateAction<{
//     id: string;
//     title: string;
//     status: string;
// }[]>>
}

export const TasksList = ({tasks,setTasks}: ITasksListProps) => {
  return (
    <>

      <div>{tasks[0].id}</div>
    <button onClick={() => setTasks([{id:'test',title:'s',status:'s'}])}>a</button>
    
    </>
  );
};
