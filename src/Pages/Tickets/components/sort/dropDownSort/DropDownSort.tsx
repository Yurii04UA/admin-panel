import { useState } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import s from "./DropDownSort.module.scss";

type ITicketProps = {
  id: string;
  title: string;
  username: string;
  avatar: string;
  registeredAt: string;
  registeredTime: string;
  statuses: string;
  updateTime: string;
};

interface IDropDownProps {
  data: ITicketProps[];
  dataDefault: ITicketProps[];
  setData: (value: ITicketProps[]) => void;
}

export const DropDownSort: React.FC<IDropDownProps> = ({ dataDefault, data, setData }) => {
  const [isActiveDetails, setIsactiveDetails] = useState<
    "none" | "low" | "high"
  >("none");
  const [isActiveName, setIsactiveName] = useState<"none" | "low" | "high">(
    "none",
  );
  const [isActiveDate, setIsactiveDate] = useState<"none" | "low" | "high">(
    "none",
  );
  const [isActivePriority, setIsactivePriority] = useState<
    "none" | "low" | "high"
  >("none");

  const defaultData = () => {
    setData(dataDefault);
  };

  const clickHandelerDetails = () => {
    if (isActiveDetails === "none") {
      setIsactiveDetails("low");
      const newData = [...data];
      const sortNewData = newData.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
      setData(sortNewData);
    }
    if (isActiveDetails === "low") {
      setIsactiveDetails("high");
      const newData = [...data];
      const sortNewData = newData.sort((a, b) => (b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1));
      setData(sortNewData);
    }
    if (isActiveDetails === "high") {
      setIsactiveDetails("none");
      defaultData();
    }
    setIsactiveName("none");
    setIsactivePriority("none");
    setIsactiveDate("none");
  };
  const clickHandelerName = () => {
    if (isActiveName === "none") {
      setIsactiveName("low");
      const newData = [...data];
      const sortNewData = newData.sort((a, b) =>
        a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1,
      );
      setData(sortNewData);
    }
    if (isActiveName === "low") {
      setIsactiveName("high");
      const newData = [...data];
      const sortNewData = newData.sort((a, b) =>
        b.username.toLowerCase() > a.username.toLowerCase() ? 1 : -1,
      );
      setData(sortNewData);
    }
    if (isActiveName === "high") {
      setIsactiveName("none");
      defaultData();
    }

    setIsactiveDetails("none");
    setIsactivePriority("none");
    setIsactiveDate("none");
  };
  const clickHandelerDate = () => {
    if (isActiveDate === "none") {
      setIsactiveDate("low");
      const newData = [...data];
      const sortNewData = newData.sort((a, b) =>
        b.registeredAt > a.registeredAt ? 1 : -1,
      );
      setData(sortNewData);
    }
    if (isActiveDate === "low") {
      setIsactiveDate("high");
      const newData = [...data];
      const sortNewData = newData.sort((a, b) =>
        Date.parse(a.registeredAt) > Date.parse(b.registeredAt) ? 1 : -1,
      );
      setData(sortNewData);
    }
    if (isActiveDate === "high") {
      setIsactiveDate("none");
      defaultData();
    }

    setIsactiveDetails("none");
    setIsactiveName("none");
    setIsactivePriority("none");
  };
  const clickHandelerPriority = () => {
    if (isActivePriority === "none") {
      setIsactivePriority("low");
      const newDataHigh = [...data].filter(
        (ticket) => ticket.statuses === "high",
      );
      const newDataNormal = [...data].filter(
        (ticket) => ticket.statuses === "normal",
      );
      const newDataLow = [...data].filter(
        (ticket) => ticket.statuses === "low",
      );
      const newData = [...newDataHigh, ...newDataNormal, ...newDataLow];
      setData(newData);
    }
    if (isActivePriority === "low") {
      setIsactivePriority("high");
      const newDataHigh = [...data].filter(
        (ticket) => ticket.statuses === "high",
      );
      const newDataNormal = [...data].filter(
        (ticket) => ticket.statuses === "normal",
      );
      const newDataLow = [...data].filter(
        (ticket) => ticket.statuses === "low",
      );
      const newData = [...newDataLow, ...newDataNormal, ...newDataHigh];
      setData(newData);
    }
    if (isActivePriority === "high") {
      setIsactivePriority("none");
      defaultData();
    }

    setIsactiveDetails("none");
    setIsactiveName("none");
    setIsactiveDate("none");
  };

  const clickHandelerDefault = () => {
    setIsactiveDetails("none");
    setIsactivePriority("none");
    setIsactiveDate("none");
    setIsactiveName("none");
    defaultData();
  };
  return (
    <div className={s.dropDown}>
      <button onClick={clickHandelerDetails}>
        Details
        {isActiveDetails === "none" ? (
          <div className={s.plug}></div>
        ) : null || isActiveDetails === "low" ? (
          <ArrowDownwardIcon />
        ) : null || isActiveDetails === "high" ? (
          <ArrowUpwardIcon />
        ) : null}
      </button>
      <button onClick={clickHandelerName}>
        Name
        {isActiveName === "none" ? (
          <div className={s.plug}></div>
        ) : null || isActiveName === "low" ? (
          <ArrowDownwardIcon />
        ) : null || isActiveName === "high" ? (
          <ArrowUpwardIcon />
        ) : null}
      </button>
      <button onClick={clickHandelerDate}>
        Date
        {isActiveDate === "none" ? (
          <div className={s.plug}></div>
        ) : null || isActiveDate === "low" ? (
          <ArrowDownwardIcon />
        ) : null || isActiveDate === "high" ? (
          <ArrowUpwardIcon />
        ) : null}
      </button>
      <button onClick={clickHandelerPriority}>
        Priority
        {isActivePriority === "none" ? (
          <div className={s.plug}></div>
        ) : null || isActivePriority === "low" ? (
          <ArrowDownwardIcon />
        ) : null || isActivePriority === "high" ? (
          <ArrowUpwardIcon />
        ) : null}
      </button>
      <button onClick={clickHandelerDefault}>Default</button>
    </div>
  );
};
