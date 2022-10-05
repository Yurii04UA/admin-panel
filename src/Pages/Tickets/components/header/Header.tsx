import { useState } from 'react';
import SortIcon from "@mui/icons-material/Sort";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { ModalAdd } from '../modalAdd';
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";

import s from "./Header.module.scss";

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
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className={s.header}>
      <div className={s.group}>
        <button>
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
        onClick={() => setIsShowModal(true)}
      />
     {isShowModal? 
      <ModalAdd setIsShowModal={setIsShowModal} data={data} setData={setData}/>
      : null}
    </div>
  );
};
