import { useState,useEffect } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import s from "./DropDownSort.module.scss";

export const DropDownSort = () => {
  const button = ["Details", "Name", "Date", "Priority"];
  const [aa,setAa] = useState('');
  return (
    <div className={s.dropDown}>
      {button.map((btn) => {
        
        const [sort, setSort] = useState<"none" | "up" | "down">('none');
       
        const changeArrow = () => {
          setAa(btn);
          if(aa === btn){
            setSort('down');
          }
          
          
        };
        
        useEffect(() =>{
          setSort('none');
          if(aa === btn){
            setSort('up');
          }
          
        },[aa]);

        return (
          <button onClick={changeArrow} key={btn}>
            {btn}
            {sort === "none" ? (
              ""
            ) : "" || sort === "up" ? (
              <ArrowUpwardIcon />
            ) : null || sort === "down" ? (
              <ArrowDownwardIcon />
            ) : null}
          </button>
        );
      })}
    </div>
  );
};
