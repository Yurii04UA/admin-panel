import "./OverviewTicket.scss";
interface IOverviewTicketProps{
   title: string
   description: string
}

export const OverviewTicket = ({title,description}: IOverviewTicketProps) => {
  return (
    <div className="overview-ticket">
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};
