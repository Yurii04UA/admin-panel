import { useState } from "react";
import { Dayjs } from "dayjs";
import uuid from "react-uuid";
import { faker } from "@faker-js/faker";

import { InputDate } from "../../../../Components/Form/InputDate";
import { LayoutModal } from "../../../../Components/Layouts/LayoutModal";
import { Button } from "../../../../Components/Button/ButtonBasic";
import { Input } from "../../../../Components/Form/Input";
import { InputSelect } from "../../../../Components/Form/InputSelect";
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import { useTickets } from "../../../../Hooks/useTickets";


interface IModalAddProps {
  setIsShowModal: (value: boolean) => void;
}

export const ModalAdd: React.FC<IModalAddProps> = ({
  setIsShowModal,

}) => {
  const { setNewItem } = useTickets();

  const dateNow = new Date().toLocaleDateString("en-US");
  const timeNow = new Date().toLocaleTimeString().slice(0, 5);
  const [details, setDatails] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState<string | Dayjs | null>(dateNow);
  const [time, setTime] = useState<string | Dayjs | null>(timeNow);

  const addTicket = () => {
    const newItem = {
      id: uuid(),
      title: details,
      username: name,
      avatar: faker.image.avatar(),
      registeredAt: date?.toString() as string,
      registeredTime: time?.toString() as string,
      statuses: status,
      updateTime: "now",
    };
    if (details && name && status) {
      setNewItem(newItem);
      setIsShowModal(false);
    }
  };

  return (
    <LayoutModal title="Add tickets" setIsShowModal={setIsShowModal}>
      <Input
        label="Ticket details"
        placeholder="Add description"
        value={details}
        setValue={setDatails}
        icon={false}
      />
      <Input
        label="Customer name"
        placeholder="Name"
        value={name}
        setValue={setName}
        icon={false}
      />
      <InputSelect status={status} setStatus={setStatus} />
      <InputDate setDate={setDate} setTime={setTime} />
      <Button children="Save" type="submit" onClick={addTicket} />
      <ButtonWB
        children="Cancel"
        type="button"
        myClass="btnWA"
        onClick={() => setIsShowModal(false)}
      />
    </LayoutModal>
  );
};
