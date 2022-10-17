import { useState, useEffect } from "react";
import { Dayjs } from "dayjs";
import uuid from "react-uuid";
import { faker } from "@faker-js/faker";

import { Button } from "components/button/buttonBasic";
import { ButtonWB } from "components/button/buttonWithoutBorder";
import { Input } from "components/form/input";
import { LayoutModal } from "layouts/layoutModal";
import { InputDate } from "components/form/inputDate";

type ItemContact = {
  id: string;
  avatar: string;
  username: string;
  registeredAt: string;
  address: string;
  phone: string;
};

interface IFormContactsProps {
  setIsShowModal: (value: boolean) => void;
  data: ItemContact[];
  setData: (value: ItemContact[]) => void;
}

export const FormAdd: React.FC<IFormContactsProps> = ({
  setIsShowModal,
  data,
  setData,
}) => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [newItem, setNewItem] = useState<ItemContact>({
    id: "",
    avatar: "",
    username: "",
    registeredAt: "",
    address: "",
    phone: "",
  });

  const dateNow = new Date().toLocaleDateString("en-US");
  const [date, setDate] = useState<string | Dayjs | null>(dateNow);
  const [time, setTime] = useState<string | Dayjs | null>(dateNow);

  const closeModalEdit = () => {
    setIsShowModal(false);
  };

  const addItemHandler = () => {
    const length = data.filter((contact) => contact.id === newItem?.id).length;
    if (!length) {
      const newData = [...data];
      newData.unshift(newItem);
      setData(newData);
    }
  };

  const submitHandler = () => {
    const newItem = {
      id: uuid(),
      avatar: faker.image.avatar(),
      username,
      address,
      phone,
      registeredAt: date?.toString() as string,
    };
    setNewItem(newItem);

  };
  useEffect(() => {
    if (newItem.id) {
      addItemHandler();
      setIsShowModal(false);
    }
  }, [newItem]);

  return (
    <LayoutModal title={"Edit contact"} setIsShowModal={setIsShowModal}>
      <Input
        label="Name"
        type="text"
        value={username}
        setValue={setUsername}
        icon={false}
        placeholder={""}
      />
      <Input
        label="Phone"
        type="text"
        value={phone}
        setValue={setPhone}
        icon={false}
        placeholder={""}
      />
      <InputDate setDate={setDate} setTime={setTime} />
      <Input
        label="Address"
        type="text"
        value={address}
        setValue={setAddress}
        icon={false}
        placeholder={""}
      />
      <Button type="submit" children={"Save"} onClick={submitHandler} />
      <ButtonWB
        type="button"
        children={"Cancel"}
        onClick={closeModalEdit}
        myClass="btnWA"
      />
    </LayoutModal>
  );
};
