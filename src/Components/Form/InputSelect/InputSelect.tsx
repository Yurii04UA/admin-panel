import {Box, MenuItem, FormControl ,Select, SelectChangeEvent, InputLabel} from '@mui/material';

import s from './InputSelect.module.scss';


interface IInputSelectProps{
   status: string;
   setStatus: (value: string) => void
}

export const InputSelect: React.FC<IInputSelectProps> = ({ status, setStatus }) => {

   const handleChange = (event: SelectChangeEvent) => {
      setStatus(event.target.value as string);
   };
  return (
   <Box>
   <FormControl fullWidth>
   
      <label>Priority</label>
     <Select
      className={s.select}
      displayEmpty
       value={status}
       onChange={handleChange}
       >
       {status? null : 
          <MenuItem value="">
            <div className={s.placeholder}>Choose priority</div>
          </MenuItem>}
       <MenuItem value={"high"}>high</MenuItem>
       <MenuItem value={"normal"}>normal</MenuItem>
       <MenuItem value={"low"}>low</MenuItem>
     </Select>
   </FormControl>
 </Box>
  );
};
