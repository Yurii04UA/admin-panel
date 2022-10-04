import { useState } from "react";
import {Box, MenuItem, FormControl ,Select, SelectChangeEvent} from '@mui/material';
import { Input } from "../../../Auth/components";

import s from './FormEdit.module.scss';
import { Button } from "../../../../Components/Button";


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
 
 interface IModalProps {
   id: string;
   data: ITicketProps[];
   setData: (value: ITicketProps[]) => void;
   setIsShowModalEdit: (value:boolean) => void
 }

export const FormEdit: React.FC<IModalProps> = ({ id, data, setData, setIsShowModalEdit }) => {

   const [ticket] = data.filter(ticket => ticket.id === id);
   const [title, setTitle] = useState(ticket.title);
   const [name,setName] = useState(ticket.username);
   const [status, setStatus] = useState(ticket.statuses);
   

   const handleChange = (event: SelectChangeEvent) => {
      setStatus(event.target.value as string);
      
    };

    const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      const newData = [...data].map(item => {
         if(item.id === id){
            item.title = title;
            item.username = name;
            item.statuses = status;
         }
         return item;
      });
      setData(newData);
      setIsShowModalEdit(false);
    };

  return (
    <div className={s.modalWrapper}>
      <div className={s.modalEdit}>
         <h2>Edit ticket</h2>
        <form className={s.form} onSubmit={submitHandler}>
          <Input
            label="ticket details"
            type="text"
            value={title}
            setValue={setTitle}
            icon={false}
            placeholder={''}
          />
          <Input
            label="Customer name"
            type="text"
            value={name}
            setValue={setName}
            icon={false}
            placeholder={''}
          />
          <Box>
            <FormControl fullWidth>
               <label>Priority</label>
              <Select
               className={s.select}
                value={status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value={"high"}>high</MenuItem>
                <MenuItem value={"normal"}>normal</MenuItem>
                <MenuItem value={"low"}>low</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button type='submit' children={"Save"}/>
          <Button type='button' children={"Cancel"} onClick={() => setIsShowModalEdit(false)}/>
        </form>
      </div>
    </div>
  );
};
