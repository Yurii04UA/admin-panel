import s from './OverviewCard.module.scss';

interface IOverviewCardProps {
  title: string;
  number: number;
  onClick?: () => void;
  value?: boolean;
}

export const OverviewCard: React.FC<IOverviewCardProps> = ({
  title,
  number,
  onClick,
  value,
}) => {
  return (
    <div
      className={value? s.overviewCard + ' ' + s.activeCard : s.overviewCard}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <div>{number}</div>
    </div>
  );
};
