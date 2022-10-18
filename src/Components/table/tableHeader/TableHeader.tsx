import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import { DropDownSort } from "../sort/DropDownSort";

import { ButtonWB } from "components/button/buttonWithoutBorder";

import s from "./Header.module.scss";
import { DropDownFilter } from "../filter/DropDownFilter";

interface IHeaderProps {
  setIsShowAddModal: (value: boolean) => void;
}

export const TableHeader: React.FC<IHeaderProps> = ({ setIsShowAddModal }) => {
  const [sort, setSort] = useState({
    prop: "none",
    direction: "none",
  });
  return (
    <>
      <div className={s.header}>
        <div className={s.wrapper}>
          <button>
            <SortIcon /> sort
          </button>
          <button>
            <FilterAltIcon /> filter
          </button>
        </div>
        <ButtonWB
          type="button"
          children={"+ Add ticket"}
          myClass="btnWF"
          onClick={() => setIsShowAddModal(true)}
        />
      </div>
      <div className={s.dropDownWrapper}>
        <DropDownSort />
        <DropDownFilter/>
      </div>
    </>
  );
};
