import s from "./GraphInfo.module.scss";

interface IGpraphInfoProps {
  title: string;
  description: string;
}
export const GraphInfo: React.FC<IGpraphInfoProps> = ({
  title,
  description,
}) => {
  return (
    <div className={s.graphInfo}>
      <div className={s.graphInfoTitle}>{title}</div>
      <div className={s.graphInfoDescriprion}>{description}</div>
    </div>
  );
};
