import { useState } from "react";

import { ModalAdd } from "../modalAdd";
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import { Sort } from "../sort/Sort";
import { DropDownSort } from "../sort/dropDownSort";

import s from "./Header.module.scss";

export const Header = () => {

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowDropSort, setIsShowDropSort] = useState(false);

  return (
    <>
      <div className={s.header}>
        <div className={s.group}>
          <Sort 
            setValue={setIsShowDropSort} 
            value={isShowDropSort} />
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
            />
        ) : null}
      </div>
      <div className={s.dropDownWrapper}>
        {isShowDropSort ? <DropDownSort /> : null}
      </div>
    </>
  );
};
