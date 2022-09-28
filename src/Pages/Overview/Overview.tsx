import "./Overview.scss";
import { Title } from "../../Components/Title";
import { OverviewHeader } from "../../Components/Overview/OverviewHeader";
import { Graph } from "../../Components/Overview/Graph";

export const Overview = () => {
  return (
    <div className="overview">
      <Title title="Overview" />
      <OverviewHeader />
      <Graph />
      <div className="overview-footer"></div>
    </div>
  );
};
