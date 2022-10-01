import { OverviewLayout } from "./OverviewLayout";
import { OverviewTickets } from "./OverviewTickets";

import "./OverviewFooter.scss";
import { OverviewTasks } from "./OverviewTasks";


export const OverviewFooter = () => {
  return (
    <div className="overview-footer">
      <OverviewLayout
        title="Unresolved tickets"
        description="Group: Support"
        btnTitle="View details"
      >
        <OverviewTickets />
      </OverviewLayout>
      <OverviewLayout 
        title="Tasks" 
        description="Today" 
        btnTitle="View all">
        <OverviewTasks />
      </OverviewLayout>
    </div>
  );
};
