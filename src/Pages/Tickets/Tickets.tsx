import { Title } from "components/title";
import { TicketProvider } from "context/TicketContext";
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
