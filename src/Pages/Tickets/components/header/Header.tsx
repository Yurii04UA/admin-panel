import { useState } from "react";

import { ButtonWB } from "components/button/buttonWithoutBorder";
import { DropDownFilter } from "../filter/dropDownFilter";
import { Filter } from "../filter/Filter";
import { ModalAdd } from "../modalAdd";
import { DropDownSort } from "../sort/dropDownSort";
import { Sort } from "../sort/Sort";

import s from "./Header.module.scss";

export const Header = () => {
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
          <ModalAdd setIsShowModal={setIsShowModal} />
        ) : null}
      </div>
      <div className={s.dropDownWrapper}>
        {isShowDropSort ? <DropDownSort /> : null}
        {isShowDropFilter ? <DropDownFilter /> : null}
      </div>
    </>
  );
};
