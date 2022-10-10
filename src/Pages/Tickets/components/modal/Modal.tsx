import { useState } from "react";
import { StopPropagation } from "../../../../HOC/StopPropagation";
import { useTickets } from "../../../../Hooks/useTickets";
import { FormEdit } from "../formEdit";

import s from "./modal.module.scss";

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

interface IModalProps {
  id: string;
  setIsDeletItem: (value: boolean) => void;
}

export const Modal: React.FC<IModalProps> = ({
  id,
  setIsDeletItem,
}) => {
  const {setShowModal,showModal} = useTickets();
  const [isShowModalAgree, setIsShowModalAgree] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);

  const deleteHandler = () => {
    setIsDeletItem(true);
    setShowModal(id);
  };

  const closeModalAgree = () => {
    setIsShowModalAgree(false);
  };

  return (
    <>
      {showModal === id ? (
        <div className={s.modal}>
          <button
            className={s.modalBtn}
            onClick={() => setIsShowModalAgree(true)}
          >
            delete
          </button>
          <button
            className={s.modalBtn}
            onClick={() => setIsShowModalEdit(true)}
          >
            edit
          </button>
        </div>
      ) : null}
      {isShowModalAgree ? (
        <div className={s.modalWrapper} onClick={closeModalAgree}>
          <div className={s.modalAgree} onClick={StopPropagation}>
            <div>Are you sure that you want to delete the ticket?</div>
            <button className={s.modalBtn} onClick={deleteHandler}>
              Yes
            </button>
            <button className={s.modalBtn} onClick={closeModalAgree}>
              No
            </button>
          </div>
        </div>
      ) : null}
      {isShowModalEdit ? (
        <FormEdit
          setIsShowModalEdit={setIsShowModalEdit}
          id={id}
        />
      ) : null}
    </>
  );
};
