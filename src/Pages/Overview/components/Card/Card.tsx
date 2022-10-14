import s from "./Card.module.scss";

interface ICardProps {
  title: string;
  number: number;
  onClick?: () => void;
  value?: boolean;
}

export const Card: React.FC<ICardProps> = ({
  title,
  number,
  onClick,
  value,
}) => {
  return (
    <div
      className={value ? s.card + " " + s.activeCard : s.card}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <div>{number}</div>
    </div>
  );
};
