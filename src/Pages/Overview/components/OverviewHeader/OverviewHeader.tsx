import { useState } from "react";
import { OverviewCard } from "../OverviewCard";
import "./OverviewHeader.scss";

export const OverviewHeader = () => {
  const [unresolver, setUnresolver] = useState(false);
  const [overdue, setOverdue] = useState(true);
  const [open, setOpen] = useState(false);
  const [hold, setHold] = useState(false);

  return (
    <div className="overview-header">
      <OverviewCard
        title="Unresolved"
        number={60}
        value={unresolver}
        onClick={() => {
          setOverdue(false);
          setOpen(false);
          setHold(false);
          setUnresolver(true);
        }}
      />
      <OverviewCard
        title="Overdue"
        number={16}
        value={overdue}
        onClick={() => {
          setOpen(false);
          setHold(false);
          setUnresolver(false);
          setOverdue(true);
        }}
      />
      <OverviewCard
        title="Open"
        number={43}
        value={open}
        onClick={() => {
          setOverdue(false);
          setHold(false);
          setUnresolver(false);
          setOpen(true);
        }}
      />
      <OverviewCard
        title="On hold"
        number={64}
        value={hold}
        onClick={() => {
          setOverdue(false);
          setUnresolver(false);
          setOpen(false);
          setHold(true);
        }}
      />
    </div>
  );
};

// (
//    <div className="overview-header">
//      <OverviewCard
//        title="Unresolver"
//        number={60}
//        id={"1"}
//        value={isActive === "1" ? true : false}
//      />
//      <OverviewCard
//        title="Overdue"
//        number={16}
//        id={"2"}
//        value={isActive === "2" ? true : false}
//      />
//      <OverviewCard
//        title="Open"
//        number={43}
//        id={"3"}
//        value={isActive === "3" ? true : false}
//      />

//      <OverviewCard
//        title="On hold"
//        number={64}
//        id={"4"}
//        value={isActive === "4" ? true : false}
//      />
//    </div>
//  )
