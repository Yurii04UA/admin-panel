import { useState, useEffect } from "react";

import { ModalAdd } from "../modalAdd";
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import { Sort } from "../sort/Sort";
import { Filter } from "../filter/Filter";
import { DropDownSort } from "../sort/dropDownSort";
import { DropDownFilter } from "../filter/dropDownFilter";
import { SortFunctionTicket } from "../../../../SortingAndFilter/SortFunctionTicket";
import { FilterFunctionTicket } from "../../../../SortingAndFilter/FilterFunctionTicket";

import s from "./Header.module.scss";

type SortProps = {
  prop: string;
  direction: string;
};

type FilterProps = {
  prop: string;
  state: string;
};

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
  sort: SortProps;
  setSort: (value: SortProps) => void;
  filter: FilterProps;
  setFilter: (value: FilterProps) => void;
  setNewItem: (value: TicketProps) => void;
}

export const Header: React.FC<IHeaderProps> = ({
  sort,
  setSort,
  filter,
  setFilter,
  setNewItem,
}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowDropSort, setIsShowDropSort] = useState(false);
  const [isShowDropFilter, setIsShowDropFilter] = useState(false);

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
          <ModalAdd setIsShowModal={setIsShowModal} setNewItem={setNewItem} />
        ) : null}
      </div>
      <div className={s.dropDownWrapper}>
        {isShowDropSort ? <DropDownSort sort={sort} setSort={setSort} /> : null}
        {isShowDropFilter ? (
          <DropDownFilter filter={filter} setFilter={setFilter} />
        ) : null}
      </div>
    </>
  );
};
