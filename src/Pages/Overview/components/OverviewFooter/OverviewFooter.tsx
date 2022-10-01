import { OverviewLayout } from "./OverviewLayout";
import { OverviewTickets } from "./OverviewTickets";
import { OverviewTasks } from "./OverviewTasks";

import s from './OverviewFooter.module.scss';

export const OverviewFooter = () => {
  return (
    <div className={s.overviewFooter}>
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
