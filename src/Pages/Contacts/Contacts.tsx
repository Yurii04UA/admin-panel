import { Title } from "../../Components/Title";
import { ContactsProvider } from "../../Context/ContactsContext";
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
