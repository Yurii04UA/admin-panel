import { useState, useRef, useEffect } from "react";
import { StopPropagation } from "hoc/StopPropagation";
import { useContacts } from "hooks/useContacts";
import { FormEdit } from "../formEdit";
import { useClickOutside } from 'hooks';

import s from "./modal.module.scss";

interface IModalProps {
  id: string;
  setIsDeletItem: (value: boolean) => void;
}

export const Modal: React.FC<IModalProps> = ({
  id,
  setIsDeletItem,
}) => {
  const { showModal, setShowModal } = useContacts();
  const [isShowModalAgree, setIsShowModalAgree] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);

  // const ref = useClickOutside(() => console.log('click outside')
  // );

  const refModal = useRef<HTMLDivElement>(null);
  // const click = (e: MouseEvent) => {
  //     // if ((refModal.current! as any)?.contains(e.target)) {
  //     //     console.log('ss');
            
  //     // }
  //     console.log(e.target, refModal);
        
  // };
  // useEffect(() => {
  //     document.addEventListener('click', (e: MouseEvent) => console.log(refModal)
  //     );
  //     return () => {
  //         document.removeEventListener('click', () => console.log(refModal));
  //     };
        
  // }, [showModal]);

  
  const deleteHandler = () => {
    setIsDeletItem(true);
    setShowModal(id);
  };

  const closeModalAgree = () => {
    setIsShowModalAgree(false);
  };
  // console.log(refModal);
  
  return (
    <>
      {showModal === id ? (
        <div className={s.modal} ref={refModal}>
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
