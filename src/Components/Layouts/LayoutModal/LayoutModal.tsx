import { StopPropagation } from '../../../HOC/StopPropagation';

import s from './LayoutModal.module.scss';

interface ILayoutProps{
   children: React.ReactNode;
   title: string;
   setIsShowModal: (value:boolean) => void
}

export const LayoutModal: React.FC<ILayoutProps> = ({ children, title, setIsShowModal: setIsShowModalEdit }) => {
   const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();
    };

    const closeModal = () => {
      setIsShowModalEdit(false);
    };

  return (
   <div className={s.modalWrapper} onClick={closeModal}>
   <div className={s.modalWindow}>
      <h2>{title}</h2>
      <form className={s.form} onSubmit={submitHandler} onClick={StopPropagation}>
         { children }
      </form>
   </div>
 </div>
  );
};
