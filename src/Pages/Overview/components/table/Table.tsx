import { Tickets } from './tickets';
import { Layout } from './layout';
import { Tasks } from './tasks';

import s from './OverviewFooter.module.scss';


export const Table = () => {
  return (
    <div className={s.overviewFooter}>
      <Layout
        title="Unresolved tickets"
        description="Group: Support"
        btnTitle="View details"
      >
        <Tickets />
      </Layout>
      <Layout 
        title="Tasks" 
        description="Today" 
        btnTitle="View all">
        <Tasks />
      </Layout>
    </div>
  );
};
