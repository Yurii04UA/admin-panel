import s from "./Ticket.module.scss";

interface ITicketProps {
  label: string;
  value: string;
}

export const Ticket: React.FC<ITicketProps> = ({ label, value }) => {
  return (
    <div className={s.overviewTicket}>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
};
