import { useState } from "react";

import { Button } from "components/button/buttonBasic";
import { ButtonWB } from "components/button/buttonWithoutBorder";
import { InputSelect } from "components/form/inputSelect";
import { useTickets } from "hooks/useTickets";
import { Input } from "components/form/input";
import { LayoutModal } from "layouts/layoutModal";

interface IModalProps {
  id: string;
  setIsShowModalEdit: (value: boolean) => void;
}

export const FormEdit: React.FC<IModalProps> = ({ id, setIsShowModalEdit }) => {
  const { sortingData, setEditItem } = useTickets();
  const [ticket] = sortingData.filter((ticket) => ticket.id === id);
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
