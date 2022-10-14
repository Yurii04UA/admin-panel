import { Header } from "components/header";
import { TicketProvider } from "context/TicketContext";
import { MyTable } from "./components/table/MyTable";

export const Tickets = () => {
  return (
    <div className="tickets">
      <TicketProvider>
        <Header title="Tickets" />
        <MyTable />
      </TicketProvider>
    </div>
  );
};
