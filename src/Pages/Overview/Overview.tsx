import "./Overview.scss";
import { Title } from "../../Components/Title";
import { OverviewHeader } from "../../Components/OverviewHeader/OverviewHeader";
import  App  from "../../Components/Line/Line";

export const Overview = () => {

  return (
    <div className="overview">
      <Title title="Overview" />
      <OverviewHeader />
      <App />
    </div>
  );
};
