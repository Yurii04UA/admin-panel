import { OverviewTicket } from "./OverviewTicket/OverviewTicket";
import "./OverviewTickets.scss";

export const OverviewTickets = () => {
  return (
    <div>
      <OverviewTicket title="Waiting on Feature Request" description="4238" />
      <OverviewTicket title="Awaiting Customer Response" description="1005" />
      <OverviewTicket title="Awaiting Developer Fix" description="914" />
      <OverviewTicket title="Pending" description="281" />
    </div>
  );
};
