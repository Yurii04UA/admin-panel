import { useState,useEffect,useLayoutEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';

import s from './DropDownFilter.module.scss';

type ITicketProps = {
  id: string;
  title: string;
  username: string;
  avatar: string;
  registeredAt: string;
  registeredTime: string;
  statuses: string;
  updateTime: string;
};

interface IDropDownProps {
  data: ITicketProps[];
  dataDefault: ITicketProps[];
  setData: (value: ITicketProps[]) => void;
}


export const DropDownFilterCopy: React.FC<IDropDownProps> = ({data, setData, dataDefault}) => {
  const [isLow,setIsLow] = useState(false);
  const [isNormal,setIsNormal] = useState(false);
  const [isHigh,setIsHigh] = useState(false);
 

  const filterLow = () => {
    if(isLow){
      setData(dataDefault);
    }else{
      const newData = [...dataDefault];
      const low = newData.filter(ticket => ticket.statuses === 'low');
      setData(low);
    }
    setIsLow(!isLow);
    setIsNormal(false);
    setIsHigh(false);
  };

  const filterNormal = () => {
    if(isNormal){
      setData(dataDefault);
    }else{
      const newData = [...dataDefault];
      const normal = newData.filter(ticket => ticket.statuses === 'normal');
      setData(normal);
    }
    setIsNormal(!isNormal);
    setIsLow(false);
    setIsHigh(false);
  };

  const filterHigh = () => {
    if(isHigh){
      setData(dataDefault);
    }else{
      const newData = [...dataDefault];
      const high = newData.filter(ticket => ticket.statuses === 'high');
      setData(high);
    }
    setIsHigh(!isHigh);
    setIsNormal(false);
    setIsLow(false);
  };

  return (
   <div className={s.dropDown}>
    <button onClick={filterLow}>
      Low
      {isLow? <CheckIcon /> : <div className={s.plug}></div>}
    </button>
    <button onClick={filterNormal} >
      Normal
      {isNormal? <CheckIcon /> : <div className={s.plug}></div>}
    </button>
    <button onClick={filterHigh}>
      High
      {isHigh? <CheckIcon /> : <div className={s.plug}></div>}
    </button>
    <input type="text" />
    <input type="text" />
   </div>
  );
};
