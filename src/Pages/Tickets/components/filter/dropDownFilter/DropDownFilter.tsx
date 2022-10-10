import CheckIcon from "@mui/icons-material/Check";

import { buttonTicketFilter } from "../../../../../Constants";
import { useTickets } from "../../../../../Hooks/useTickets";

import s from "./DropDownFilter.module.scss";


export const DropDownFilter = () => {
  const {filter,setFilter} = useTickets();
  const clickHandler = (propName: string) => {
    if (propName != "Default") {
      if (filter.prop != propName) {
        setFilter({
          prop: propName,
          state: "active",
        });
      } else {
        setFilter({
          ...filter,
          state: filter.state === "active" ? "disabled" : "active",
        });
      }
    } else {
      setFilter({
        prop: propName,
        state: "none",
      });
    }
  };

  const check = filter.state === "active" ? <CheckIcon /> : null;

  return (
    <div className={s.dropDown}>
      {buttonTicketFilter.map((btn) => {
        return (
          <button key={btn} onClick={() => clickHandler(btn)}>
            {btn}
            {btn === filter.prop ? check : null}
          </button>
        );
      })}
    </div>
  );
};
