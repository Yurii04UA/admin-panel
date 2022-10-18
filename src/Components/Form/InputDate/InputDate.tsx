import dayjs, { Dayjs } from 'dayjs';
import { Stack, TextField } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


import { useState } from 'react';

import s from './InputDate.module.scss';


interface IInputDate {
  setDate: (value: string | dayjs.Dayjs | null) => void;
  setTime: (value: string | dayjs.Dayjs | null) => void;

}

export const InputDate: React.FC<IInputDate> = ({ setDate, setTime }) => {
  const date = new Date();   
  const [valueDate, setValueDate] = useState<Dayjs | null>(
    dayjs(date),
  );
  
  const handleChange = (newValue: Dayjs | null) => {
    const month = newValue?.month() as number + 1;
    setValueDate(newValue);
    setDate(month + "/" + newValue?.date() + "/" + newValue?.year());
    setTime(newValue?.hour() + ":" + newValue?.minute());
     
  };
  return (

  <div className={s.input}>
  <label className={s.label}>Date</label>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
   <Stack>
     <DateTimePicker
     className={s.date}
       value={valueDate}
       onChange={handleChange}
       renderInput={(params) => <TextField {...params} />}
     />
   </Stack>
 </LocalizationProvider>
  </div>
  );
};
