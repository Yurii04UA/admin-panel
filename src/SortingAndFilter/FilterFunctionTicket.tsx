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
type FilterParam = {
  prop: string;
  state: string;
};

interface IFilterProps {
  setSortingData: (value: TicketProps[]) => void;
  filter: FilterParam;
  dataDefault: TicketProps[];
}

export const FilterFunctionTicket = ({
  filter,
  dataDefault,
  setSortingData,
}: IFilterProps) => {
  if (filter.prop === "Low" && filter.state === "active") {
    const newSortingDate = [...dataDefault].filter(
      (ticket) => ticket.statuses === "low",
    );
    setSortingData(newSortingDate);
  } else if (filter.prop === "Normal" && filter.state === "active") {
    const newSortingDate = [...dataDefault].filter(
      (ticket) => ticket.statuses === "normal",
    );
    setSortingData(newSortingDate);
  } else if (filter.prop === "High" && filter.state === "active") {
    const newSortingDate = [...dataDefault].filter(
      (ticket) => ticket.statuses === "high",
    );
    setSortingData(newSortingDate);
  } else {
    setSortingData(dataDefault);
  }
};
