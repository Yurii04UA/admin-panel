import { LayoutModal } from "layouts/layoutModal";
import React, { useState } from "react";

type ItemContact = {
  id: string;
  avatar: string;
  username: string;
  registeredAt: string;
  address: string;
  phone: string;
};

interface IFormContactsProps {
  title: string;
  setIsShowModal: (value: boolean) => void;
  // item: ItemContact;
}

export const FormContacts: React.FC<IFormContactsProps> = ({
  title,
  setIsShowModal,
}) => {

  return (
    <LayoutModal title={title} setIsShowModal={setIsShowModal}>
      d
    </LayoutModal>
  );
};
