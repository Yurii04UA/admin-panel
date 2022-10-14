import { Title } from "components/title";
import { ContactsProvider } from "context/ContactsContext";
import { MyTable } from "./components/table/MyTable";

export const Contacts = () => {
  return (
    <div>
      <ContactsProvider>
        <Title title="Contacts" />
        <MyTable />
      </ContactsProvider>
    </div>
  );
};
