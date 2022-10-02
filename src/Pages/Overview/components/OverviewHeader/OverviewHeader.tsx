import { useState } from "react";

import { OverviewCard } from "../OverviewCard";

import s from './OverviewHeader.module.scss';

export const OverviewHeader = () => {
  const [unresolver, setUnresolver] = useState(false);
  const [overdue, setOverdue] = useState(true);
  const [open, setOpen] = useState(false);
  const [hold, setHold] = useState(false);

  return (
    <div className={s.overviewHeader}>
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

