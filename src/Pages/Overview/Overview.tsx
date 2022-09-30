import { Title } from "../../Components/Title";
import { OverviewHeader, OverviewFooter, Graph } from "./components";

import "./Overview.scss";

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
