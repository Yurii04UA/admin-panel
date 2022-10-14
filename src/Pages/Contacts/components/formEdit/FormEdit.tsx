import { useState } from "react";

import { Input } from "../../../Auth/components";
import { Button } from "../../../../Components/Button/ButtonBasic";
import { ButtonWB } from "../../../../Components/Button/ButtonWithoutBorder";
import { LayoutModal } from "../../../../Components/Layouts/LayoutModal";
import { useContacts } from "../../../../Hooks/useContacts";


interface IModalProps {
  id: string;
  setIsShowModalEdit: (value: boolean) => void;
}

export const FormEdit: React.FC<IModalProps> = ({
  id,
  setIsShowModalEdit,
}) => {
  const { setEditItem, sortingData } = useContacts();

  const [contact] = sortingData.filter((contact) => contact.id === id);
  const [name, setName] = useState(contact.username);
  const [phone, setPhone] = useState(contact.phone);
  const [address, setAddress] = useState(contact.address);

  const closeModalEdit = () => {
    setIsShowModalEdit(false);
  };

  const editItem = () => {
    setEditItem({
      username: name,
      phone: phone,
      address: address,
      id: contact.id,
      avatar: contact.avatar,
      registeredAt: contact.registeredAt,
    });
    setIsShowModalEdit(false);
  };

  return (
    <LayoutModal 
      title="Edit contact" 
      setIsShowModal={setIsShowModalEdit}>
      <Input
        label="Name"
        type="text"
        value={name}
        setValue={setName}
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
      <Button 
        type="submit" 
        children={"Save"} 
        onClick={editItem} />
      <ButtonWB
        type="button"
        children={"Cancel"}
        onClick={closeModalEdit}
        myClass="btnWA"
      />
    </LayoutModal>
  );
};
