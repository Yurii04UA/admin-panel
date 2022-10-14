import { useState } from "react";

import { ModalAdd } from "../modalAdd";
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import { Sort } from "../sort/Sort";
import { Filter } from "../filter/Filter";
import { DropDownSort } from "../sort/dropDownSort";
import { DropDownFilter } from "../filter/dropDownFilter";

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
