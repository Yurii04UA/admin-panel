import { useState } from "react";
import { Dayjs } from "dayjs";
import uuid from "react-uuid";
import { faker } from "@faker-js/faker";

import { InputDate } from "../../../../Components/Form/InputDate";
import { LayoutModal } from "../../../../Components/Layouts/LayoutModal";
import { Button } from "../../../../Components/Button/ButtonBasic";
import { Input } from "../../../../Components/Form/Input";
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import { useContacts } from "../../../../Hooks/useContacts";

interface IModalAddProps {
  setIsShowModal: (value: boolean) => void;
}

export const ModalAdd: React.FC<IModalAddProps> = ({
  setIsShowModal,
}) => {
  const {setNewItem} = useContacts();


  const dateNow = new Date().toLocaleDateString("en-US");
  const [date, setDate] = useState<string | Dayjs | null>(dateNow);
  const [time, setTime] = useState<string | Dayjs | null>(dateNow);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const addTicket = () => {
    const newItem = {
      id: uuid(),
      avatar: faker.image.avatar(),
      username: firstName + " " + lastName,
      registeredAt: date?.toString() as string,
      address: address,
      phone: phone,
    };
    if (firstName && lastName && email && address && phone) {
      setNewItem(newItem);
      setIsShowModal(false);
    }
  };

  return (
    <LayoutModal title="Add new contact" setIsShowModal={setIsShowModal}>
      <Input
        label="firts name"
        placeholder="Add first name"
        value={firstName}
        setValue={setFirstName}
        icon={false}
      />
      <Input
        label="last name"
        placeholder="Add last name"
        value={lastName}
        setValue={setLastName}
        icon={false}
      />
      <Input
        label="email"
        placeholder="Add email"
        value={email}
        setValue={setEmail}
        icon={false}
      />
      <Input
        label="address"
        placeholder="Add address"
        value={address}
        setValue={setAddress}
        icon={false}
      />
      <Input
        label="phone"
        placeholder="Add phone"
        value={phone}
        setValue={setPhone}
        icon={false}
      />
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
