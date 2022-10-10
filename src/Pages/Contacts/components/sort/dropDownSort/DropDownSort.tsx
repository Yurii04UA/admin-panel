import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { buttonContactSort } from "../../../../../Constants";

import s from "./DropDownSort.module.scss";

type SortProps = {
  prop: string;
  direction: string;
};

interface IDropDownProps {
  sort: SortProps;
  setSort: (value: SortProps) => void;
}

export const DropDownSort: React.FC<IDropDownProps> = ({ sort, setSort }) => {
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
      {buttonContactSort.map((btn) => {
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
