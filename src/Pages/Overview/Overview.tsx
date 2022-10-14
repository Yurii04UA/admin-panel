import { Title } from "components/title";
import { Cards, OverviewFooter, Graph } from "./components";

export const Overview = () => {
  return (
    <>
      <Title title="Overview" />
      <Cards />
      <Graph />
      <OverviewFooter />
    </>
  );
};
