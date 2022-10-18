import { useState } from "react";

import { StopPropagation } from "hoc/StopPropagation";

import s from "./Popup.module.scss";

interface IPopupProps {
  id: string;
  setValue: (value: any) => void;
  value: any[];
  setItem: (value: any) => void;
  type?: string;
  setIsShowEditModal: (value: boolean) => void;
}

export const Popup: React.FC<IPopupProps> = ({
  id,
  setValue,
  value,
  setItem,
  setIsShowEditModal,
}) => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  const openDeleteModal = (e: React.MouseEvent) => {
    setIsShowDeleteModal(true);
    StopPropagation(e);
  };
  const deleteHandler = () => {
    const newData = value.filter((item) => item.id != id);
    setValue(newData);
  };

  const editHandler = () => {
    const [item] = value.filter((item) => item.id === id);
    setItem(item);
    setIsShowEditModal(true);
  };

  return (
    <>
      <div className={s.popup}>
        <button onClick={openDeleteModal}>Delete</button>
        <button onClick={editHandler}>Edit</button>
      </div>
      {isShowDeleteModal ? (
        <div className={s.modalWrapper} onClick={closeDeleteModal}>
          <div className={s.modalAgree} onClick={StopPropagation}>
            <div>Are you sure that you want to delete the ticket?</div>
            <button className={s.modalBtn} onClick={deleteHandler}>
              Yes
            </button>
            <button className={s.modalBtn} onClick={closeDeleteModal}>
              No
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
