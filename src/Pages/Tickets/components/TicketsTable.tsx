

import { MyTable } from "./table/MyTable";
import s from "./TicketsTable.module.scss";

export const TicketsTable = () => {
  return (
    <>
      <div>Header( filter and sort)</div>
         <MyTable />
    </>
  );
};
