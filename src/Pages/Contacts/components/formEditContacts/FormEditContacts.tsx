import { useState, useEffect } from "react";

import { Button } from "components/button/buttonBasic";
import { ButtonWB } from "components/button/buttonWithoutBorder";
import { Input } from "components/form/input";
import { LayoutModal } from "layouts/layoutModal";

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
  item: ItemContact;
  data: ItemContact[];
  setData: (value: ItemContact[]) => void;
}

export const FormEditContacts: React.FC<IFormContactsProps> = ({
  setIsShowModal,
  item,
  data,
  setData,
}) => {
  const [username, setUsername] = useState(item.username);
  const [phone, setPhone] = useState(item.phone);
  const [address, setAddress] = useState(item.address);

  const closeModalEdit = () => {
    setIsShowModal(false);
  };

  const submitHandler = () => {
    const newData = [...data].map((contact) => {
      if (contact.id === item.id) {
        contact.username = username;
        contact.phone = phone;
        contact.address = address;
      }
      return contact;
    });
    setData(newData);

    setIsShowModal(false);
  };
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
