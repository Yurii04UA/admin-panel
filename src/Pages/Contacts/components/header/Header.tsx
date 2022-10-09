import { useState, useEffect } from "react";

import { ModalAdd } from "../modalAdd";
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import { Sort } from "../sort/Sort";
import { DropDownSort } from "../sort/dropDownSort";
import { SortFunctionContact } from "../../../../SortingAndFilter/SortFunctionContact";

import s from "./Header.module.scss";

type ContactProps = {
  id: string
  username: string;
  avatar: string;
  registeredAt: string; 
  address:string;
  phone: string;
};

interface IHeaderProps {
  dataDefault: ContactProps[];
  setDataDefault: (value: ContactProps[]) => void;

  sortingData: ContactProps[];
  setSortingData: (value: ContactProps[]) => void;
}

export const Header: React.FC<IHeaderProps> = ({
  setSortingData,
  setDataDefault,
  sortingData,
  dataDefault,
}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowDropSort, setIsShowDropSort] = useState(false);
  const [sort, setSort] = useState({
    prop: "none",
    direction: "none",
  });
 
  useEffect(() => {
    SortFunctionContact({ sort, setSortingData, sortingData, dataDefault });
  }, [sort]);
 

  return (
    <>
      <div className={s.header}>
        <div className={s.group}>
          <Sort setValue={setIsShowDropSort} value={isShowDropSort} />
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
      </div>
    </>
  );
};
