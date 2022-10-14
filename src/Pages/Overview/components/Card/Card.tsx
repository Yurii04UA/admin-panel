import s from "./Card.module.scss";

interface ICardProps {
  label: string;
  value: number;
  onClick?: () => void;
  isActive?: boolean;
}

export const Card: React.FC<ICardProps> = ({
  label,
  onClick,
  value,
  isActive,
}) => {
  return (
    <div
      className={isActive ? s.card + " " + s.activeCard : s.card}
      onClick={onClick}
    >
      <h3>{label}</h3>
      <div>{value}</div>
    </div>
  );
};
