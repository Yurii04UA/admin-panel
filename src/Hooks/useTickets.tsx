import { useContext } from "react";
import { TicketContext } from "../Context/TicketContext";

export const useTickets = () => {
  return useContext(TicketContext);
};
