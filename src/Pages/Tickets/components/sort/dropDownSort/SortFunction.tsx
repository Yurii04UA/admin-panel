type TicketProps = {
  id: string;
  title: string;
  username: string;
  avatar: string;
  registeredAt: string;
  registeredTime: string;
  statuses: string;
  updateTime: string;
};
type SortParam = {
  prop: string;
  direction: string;
};

interface ISortProps {
  setSortingData: (value: TicketProps[]) => void;
  sortingData: TicketProps[];
  sort: SortParam;
  dataDefault: TicketProps[];
}

export const SortFunction = ({
  sort,
  setSortingData,
  sortingData,
  dataDefault,
}: ISortProps) => {
  // sort by Details
  if (sort.prop === "Details" && sort.direction === "desc") {
    const newData = [...sortingData].sort((a, b) =>
      b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1,
    );
    setSortingData(newData);
  } else if (sort.prop === "Details" && sort.direction === "asc") {
    const newData = [...sortingData].sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
    );
    setSortingData(newData);
  }

  /// sort by Name
  if (sort.prop === "Name" && sort.direction === "desc") {
    const newData = [...sortingData].sort((a, b) =>
      b.username.toLowerCase() > a.username.toLowerCase() ? 1 : -1,
    );
    setSortingData(newData);
  } else if (sort.prop === "Name" && sort.direction === "asc") {
    const newData = [...sortingData].sort((a, b) =>
      a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1,
    );
    setSortingData(newData);
  }

  /// sort by Date
  if (sort.prop === "Date" && sort.direction === "desc") {
    const newData = [...sortingData].sort((a, b) =>
      Date.parse(a.registeredAt) > Date.parse(b.registeredAt) ? 1 : -1,
    );
    setSortingData(newData);
  } else if (sort.prop === "Date" && sort.direction === "asc") {
    const newData = [...sortingData].sort((a, b) =>
      Date.parse(b.registeredAt) > Date.parse(a.registeredAt) ? 1 : -1,
    );
    setSortingData(newData);
  }

  /// sort by Priority
  if (sort.prop === "Priority" && sort.direction === "desc") {
    const newDataHigh = [...sortingData].filter(
      (ticket) => ticket.statuses === "high",
    );
    const newDataNormal = [...sortingData].filter(
      (ticket) => ticket.statuses === "normal",
    );
    const newDataLow = [...sortingData].filter(
      (ticket) => ticket.statuses === "low",
    );
    const newData = [...newDataHigh, ...newDataNormal, ...newDataLow];
    setSortingData(newData);
  } else if (sort.prop === "Priority" && sort.direction === "asc") {
    const newDataHigh = [...sortingData].filter(
      (ticket) => ticket.statuses === "high",
    );
    const newDataNormal = [...sortingData].filter(
      (ticket) => ticket.statuses === "normal",
    );
    const newDataLow = [...sortingData].filter(
      (ticket) => ticket.statuses === "low",
    );
    const newData = [...newDataLow, ...newDataNormal, ...newDataHigh];
    setSortingData(newData);
  }

  if (sort.prop === "Default") {
    setSortingData(dataDefault);
  }
};
