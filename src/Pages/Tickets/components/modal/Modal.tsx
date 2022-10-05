import { useState } from "react";
import { StopPropagation } from "../../../../HOC/StopPropagation";
import { FormEdit } from "../formEdit";
import { FormEditTest } from "../formEdit/FormEditTest";

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
  showModal: string;
  id: string;
  data: ITicketProps[];
  setData: (value: ITicketProps[]) => void;
}

export const Modal: React.FC<IModalProps> = ({ showModal, id, setData, data }) => {
  const [isShowModalAgree, setIsShowModalAgree] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);

  const deleteHandler = () => {
    const newData = [...data].filter((task) => task.id != id);
    setData(newData);
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
            onClick={() => setIsShowModalAgree(true)}>
            delete
          </button>
          <button
            className={s.modalBtn}
            onClick={() => setIsShowModalEdit(true)}>
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
            <button
              className={s.modalBtn}
              onClick={closeModalAgree}
            >
              No
            </button>
          </div>
        </div>
      ) : null}
      {isShowModalEdit ? (
        // <FormEdit
        //   data={data}
        //   setData={setData}
        //   setIsShowModalEdit={setIsShowModalEdit}
        //   id={id}
        // />
        <FormEditTest
          data={data}
          setData={setData}
          setIsShowModalEdit={setIsShowModalEdit}
          id={id}
        />
      ) : null}
    </>
  );
};
