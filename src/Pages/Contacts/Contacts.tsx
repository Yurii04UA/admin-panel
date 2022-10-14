import { Header } from "components/header";
import { ContactsProvider } from "context/ContactsContext";
import { MyTable } from "./components/table/MyTable";

export const Contacts = () => {
  return (
    <div>
      <ContactsProvider>
        <Header title="Contacts" />
        <MyTable />
      </ContactsProvider>
    </div>
  );
};
