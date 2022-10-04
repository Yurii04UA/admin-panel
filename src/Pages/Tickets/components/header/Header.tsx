import SortIcon from "@mui/icons-material/Sort";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import s from "./Header.module.scss";
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import uuid from "react-uuid";

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

interface IHeaderProps {
  data: ITicketProps[];
  setData: (value: ITicketProps[]) => void;
}

export const Header: React.FC<IHeaderProps> = ({ data, setData }) => {
  const newData = [...data];
  newData.unshift({
    id: uuid(),
    title: "string",
    username: "string",
    avatar: "string",
    registeredAt: "string",
    registeredTime: "string",
    statuses: "low",
    updateTime: "string",
  });
  const addTicket = () => {
    setData(newData);
  };
  return (
    <div className={s.header}>
      <div className={s.group}>
        <button>
          {" "}
          <SortIcon /> sort
        </button>
        <button>
          <FilterAltIcon /> filt
        </button>
      </div>
      <ButtonWB
        type="button"
        children={"+ Add ticket"}
        myClass="btnWF"
        onClick={addTicket}
      />
    </div>
  );
};
