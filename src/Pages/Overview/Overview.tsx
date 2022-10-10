import { Title } from "../../Components/Title";
import { OverviewHeader, OverviewFooter, Graph } from "./components";

export const Overview = () => {
  return (
    <>
      <Title title="Overview" />
      <OverviewHeader />
      <Graph />
      <OverviewFooter />
    </>
  );
};
