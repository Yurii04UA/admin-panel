import { useState, useEffect } from "react";

import { ModalAdd } from "../modalAdd";
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import { Sort } from "../sort/Sort";
import { Filter } from "../filter/Filter";
import { DropDownSort } from "../sort/dropDownSort";
import { DropDownFilter } from "../filter/dropDownFilter";
import { SortFunction } from "../sort/dropDownSort/SortFunction";

import s from "./Header.module.scss";
import { FilterFunction } from "../filter/dropDownFilter/FilterFunction";

type TicketProps = {
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
  dataDefault: TicketProps[];
  setDataDefault: (value: TicketProps[]) => void;

  sortingData: TicketProps[];
  setSortingData: (value: TicketProps[]) => void;
}

export const Header: React.FC<IHeaderProps> = ({
  setSortingData,
  setDataDefault,
  sortingData,
  dataDefault,
}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowDropSort, setIsShowDropSort] = useState(false);
  const [isShowDropFilter, setIsShowDropFilter] = useState(false);
  const [sort, setSort] = useState({
    prop: "none",
    direction: "none",
  });
  const [filter, setFilter] = useState({
    prop: "none",
    state: "none",
  });

  useEffect(() => {
    SortFunction({ sort, setSortingData, sortingData, dataDefault });
  }, [sort]);
    useEffect(() => {
      FilterFunction({filter,setSortingData,dataDefault});
  }, [filter]);


  return (
    <>
      <div className={s.header}>
        <div className={s.group}>
          <Sort setValue={setIsShowDropSort} value={isShowDropSort} />
          <Filter setValue={setIsShowDropFilter} value={isShowDropFilter} />
        </div>

        <ButtonWB
          type="button"
          children={"+ Add ticket"}
          myClass="btnWF"
          onClick={() => setIsShowModal(true)}
        />
        {isShowModal ? (
          <ModalAdd
            setIsShowModal={setIsShowModal}
            data={sortingData}
            setData={setSortingData}
            setDataDefault={setDataDefault}
          />
        ) : null}
      </div>
      <div className={s.dropDownWrapper}>
        {isShowDropSort ? 
          <DropDownSort sort={sort} setSort={setSort} /> 
          : null}
        {isShowDropFilter ? 
          <DropDownFilter filter={filter} setFilter={setFilter} />
         : null}
      </div>
    </>
  );
};
