import s from "./GraphInfo.module.scss";

interface IGpraphInfoProps {
  label: string;
  value: string;
}
export const GraphInfo: React.FC<IGpraphInfoProps> = ({
  label,
  value,
}) => {
  return (
    <div className={s.graphInfo}>
      <div className={s.graphInfoTitle}>{label}</div>
      <div className={s.graphInfoDescriprion}>{value}</div>
    </div>
  );
};
