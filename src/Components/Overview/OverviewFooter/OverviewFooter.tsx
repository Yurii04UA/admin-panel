import "./OverviewFooter.scss";
import { OverviewLayout } from "./OverviewLayout";
import { OverviewTasks } from "./OverviewTasks";
import { OverviewTickets } from "./OverviewTickets";

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
      <OverviewLayout title="Tasks" description="Today" btnTitle="View all">
        <OverviewTasks />
      </OverviewLayout>
    </div>
  );
};
