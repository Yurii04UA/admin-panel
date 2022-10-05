import { useState } from 'react';

import { ModalAdd } from '../modalAdd';
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import { Sort } from '../sort/Sort';
import { Filter } from '../filter/Filter';

import s from "./Header.module.scss";
import { DropDownSort } from '../sort/dropDownSort';
import { DropDownFilter } from '../filter/dropDownFilter';

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
  const [isShowDropSort,setIsShowDropSort] = useState(false);
  const [isShowDropFilter,setIsShowDropFilter] = useState(false);

  return (
    <>
    <div className={s.header}>
      <div className={s.group}>
        <Sort setValue={setIsShowDropSort} value={isShowDropSort}  />
        <Filter setValue={setIsShowDropFilter} value={isShowDropFilter}/>
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
    <div className={s.dropDownWrapper}>
    {isShowDropSort? <DropDownSort /> : null}
    {isShowDropFilter? <DropDownFilter /> : null}
    </div>
    </>
  );
};
