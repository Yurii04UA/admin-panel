import "./Overview.scss";
import { Title } from "../../Components/Title";
import { OverviewHeader } from "../../Components/Overview/OverviewHeader";
import { Graph } from "../../Components/Overview/Graph";
import { OverviewFooter } from "../../Components/Overview/OverviewFooter";

export const Overview = () => {
  return (
    <div className="overview">
      <Title title="Overview" />
      <OverviewHeader />
      <Graph />
      <OverviewFooter />
      <div className="overview-footer"></div>
    </div>
  );
};
