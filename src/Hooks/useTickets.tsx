import { useContext } from "react";
import { TicketContext } from "context/TicketContext";

export const useTickets = () => {
  return useContext(TicketContext);
};
