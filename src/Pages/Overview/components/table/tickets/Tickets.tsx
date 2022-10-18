import { Ticket } from "./ticket";

export const Tickets = () => {
  return (
    <div>
      <Ticket label="Waiting on Feature Request" value="4238" />
      <Ticket label="Awaiting Customer Response" value="1005" />
      <Ticket label="Awaiting Developer Fix" value="914" />
      <Ticket label="Pending" value="281" />
    </div>
  );
};
