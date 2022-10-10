import { useContext } from "react";
import { ContactsContext } from "../Context/ContactsContext";

export const useContacts = () => {
  return useContext(ContactsContext);
};
