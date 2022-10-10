import { useState } from "react";

import { Input } from "../../../Auth/components";
import { Button } from "../../../../Components/Button/ButtonBasic";
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import { LayoutModal } from "../../../../Components/Layouts/LayoutModal";
import { InputSelect } from "../../../../Components/Form/InputSelect";

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
  data: ITicketProps[];
  setEditItem: (value: ITicketProps) => void;
  setIsShowModalEdit: (value: boolean) => void;
}

export const FormEdit: React.FC<IModalProps> = ({
  id,
  data,
  setIsShowModalEdit,
  setEditItem,
}) => {
  const [ticket] = data.filter((ticket) => ticket.id === id);
  const [title, setTitle] = useState(ticket.title);
  const [name, setName] = useState(ticket.username);
  const [status, setStatus] = useState(ticket.statuses);

  const closeModalEdit = () => {
    setIsShowModalEdit(false);
  };

  const editTicket = () => {
    setEditItem({
      id: ticket.id,
      avatar: ticket.avatar,
      registeredAt: ticket.registeredAt,
      registeredTime: ticket.registeredTime,
      updateTime: ticket.updateTime,
      title: title,
      statuses: status,
      username: name,
    });
    setIsShowModalEdit(false);
  };

  return (
    <LayoutModal title="Edit ticket" setIsShowModal={setIsShowModalEdit}>
      <Input
        label="ticket details"
        type="text"
        value={title}
        setValue={setTitle}
        icon={false}
        placeholder={""}
      />
      <Input
        label="Customer name"
        type="text"
        value={name}
        setValue={setName}
        icon={false}
        placeholder={""}
      />
      <InputSelect status={status} setStatus={setStatus} />
      <Button type="submit" children={"Save"} onClick={editTicket} />
      <ButtonWB
        type="button"
        children={"Cancel"}
        onClick={closeModalEdit}
        myClass="btnWA"
      />
    </LayoutModal>
  );
};
