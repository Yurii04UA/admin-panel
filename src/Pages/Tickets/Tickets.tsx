import { Title } from "../../Components/Title";
import { TicketProvider } from "../../Context/TicketContext";
import { MyTable } from "./components/table/MyTable";

export const Tickets = () => {
  return (
    <div className="tickets">
      <TicketProvider>
        <Title title="Tickets" />
        <MyTable />
      </TicketProvider>
    </div>
  );
};
