import { StopPropagation } from "hoc/StopPropagation";

import s from "./LayoutModal.module.scss";

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
  setIsShowModal: (value: boolean) => void;
}

export const LayoutModal: React.FC<ILayoutProps> = ({
  children,
  title,
  setIsShowModal,
  
}) => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <div className={s.modalWrapper} onClick={closeModal}>
      <div className={s.modalWindow}>
        <h2>{title}</h2>
        <form
          className={s.form}
          onSubmit={submitHandler}
          onClick={StopPropagation}
        >
          {children}
        </form>
      </div>
    </div>
  );
};
