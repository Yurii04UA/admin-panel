import { Header } from "components/header";
import { Cards, Graph, Table } from "./components";

export const Overview = () => {
  return (
    <>
      <Header title="Overview" />
      <Cards />
      <Graph />
      <Table />
    </>
  );
};
