import "./GraphInfo.scss";

interface IGpraphInfoProps{
   title: string
   description: string
}
export const GraphInfo = ({title,description}:IGpraphInfoProps) => {
  return (
    <div className="graph-info">
      <div className="graph-info-title">{title}</div>
      <div className="graph-info-descriprion">{description}</div>
    </div>
  );
};
