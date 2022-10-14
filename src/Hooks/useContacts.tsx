import { useContext } from "react";
import { ContactsContext } from "context/ContactsContext";

export const useContacts = () => {
  return useContext(ContactsContext);
};
