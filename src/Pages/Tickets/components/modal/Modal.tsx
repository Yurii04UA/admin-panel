

import s from './modal.module.scss';
type ITicketProps = {
  id: string
  title: string;
  username: string;
  avatar: string;
  registeredAt: string
  registeredTime: string
  statuses: string
  updateTime: string
}

interface IModalProps{
   showModal: string
   id:string 
   setData?: (value: ITicketProps[]) => void 
   data: ITicketProps[]
}

export const Modal: React.FC<IModalProps> = ({ showModal, id, setData,data }) => {
   
  return (
   <>
   {showModal === id? 
      <div className={s.modal}>
         <button className={s.modalButton} onClick={() => console.log('delete')}> delete</button>
         <button className={s.modalButton} onClick={() =>console.log('edit')}> edit</button>
      </div> : null}  
   </> 
  );
};
