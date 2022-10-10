import { useState } from "react";

import { ModalAdd } from "../modalAdd";
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import { Sort } from "../sort/Sort";
import { DropDownSort } from "../sort/dropDownSort";

import s from "./Header.module.scss";

type SortProps = {
  prop: string;
  direction: string;
};

type ContactProps = {
  id: string;
  username: string;
  avatar: string;
  registeredAt: string;
  address: string;
  phone: string;
};

interface IHeaderProps {
  sort: SortProps;
  setSort: (value: SortProps) => void;
  setNewItem: (value: ContactProps) => void;
}

export const Header: React.FC<IHeaderProps> = ({
  sort,
  setSort,
  setNewItem,
}) => {
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
            setNewItem={setNewItem} />
        ) : null}
      </div>
      <div className={s.dropDownWrapper}>
        {isShowDropSort ? <DropDownSort sort={sort} setSort={setSort} /> : null}
      </div>
    </>
  );
};
