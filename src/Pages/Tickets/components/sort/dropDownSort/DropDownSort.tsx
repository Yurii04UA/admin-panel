import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { buttonTicketSort } from "../../../../../Constants";

import s from "./DropDownSort.module.scss";
import { useTickets } from "../../../../../Hooks/useTickets";


export const DropDownSort= () => {
  const {sort,setSort} = useTickets();
  const clickHandler = (propName: string) => {
    if (propName != "Default") {
      if (sort.prop != propName) {
        setSort({
          prop: propName,
          direction: "desc",
        });
      } else {
        setSort({
          ...sort,
          direction: sort.direction === "desc" ? "asc" : "desc",
        });
      }
    } else {
      setSort({
        prop: propName,
        direction: "none",
      });
    }
  };

  const arrow =
    sort.prop != "Default" ? (
      sort.direction === "none" ? (
        <div className={s.plug}></div>
      ) : "" || sort.direction === "asc" ? (
        <ArrowUpwardIcon />
      ) : <div className={s.plug}></div> || sort.direction === "desc" ? (
        <ArrowDownwardIcon />
      ) : (
        <div className={s.plug}></div>
      )
    ) : null;
  return (
    <div className={s.dropDown}>
      {buttonTicketSort.map((btn) => {
        return (
          <button onClick={() => clickHandler(btn)} key={btn}>
            {btn}
            {btn === sort.prop ? arrow : null}
          </button>
        );
      })}
    </div>
  );
};
