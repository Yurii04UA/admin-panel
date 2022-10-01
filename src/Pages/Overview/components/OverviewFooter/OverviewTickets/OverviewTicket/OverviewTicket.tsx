import s from './OverviewTicket.module.scss';

interface IOverviewTicketProps{
  title: string
  description: string
}

export const OverviewTicket: React.FC<IOverviewTicketProps> = ({title,description}) => {
  return (
    <div className={s.overviewTicket}>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};
