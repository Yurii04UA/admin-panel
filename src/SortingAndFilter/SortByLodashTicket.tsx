import orderBy from "lodash.orderby";

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
export const SortByLodashTicket = ({
  sort,
  setSortingData,
  sortingData,
  dataDefault,
}: ISortProps) => {
  const sortingDataCopy = [...sortingData];
  const direction = sort.direction === "asc" ? "asc" : "desc";
  const propName =
    sort.prop === "Details" ? "title" : "" || 
    sort.prop === "Name" ? "username" : "" ;
  const newSortingData = orderBy(sortingDataCopy, [propName], [direction]);
  setSortingData(newSortingData);

  if (sort.prop === 'Priority') {
    sortingDataCopy.map(item => 
      item.statuses === 'low' ? item.statuses = '2' : '' ||
        item.statuses === 'normal' ? item.statuses = '1' : '' ||
        item.statuses === 'high' ? item.statuses = '0' : '',
    );
    const newSortingData = orderBy(sortingDataCopy, ['statuses'], [direction]);

    newSortingData.map(item => 
      item.statuses === '2' ? item.statuses = 'low' : '' ||
        item.statuses === '1' ? item.statuses = 'normal' : '' ||
        item.statuses === '0' ? item.statuses = 'high' : '',
    );
    setSortingData(newSortingData);
  }

  if (sort.prop === "Date" && sort.direction === "asc") {
    sortingDataCopy.sort(
      (a, b) => Date.parse(b.registeredAt) - Date.parse(a.registeredAt),
    );
    setSortingData(sortingDataCopy);
  } else if (sort.prop === "Date" && sort.direction === "desc") {
    sortingDataCopy.sort(
      (a, b) => Date.parse(a.registeredAt) - Date.parse(b.registeredAt),
    );
    setSortingData(sortingDataCopy);
  }

  if (sort.prop === "Default") {
    setSortingData(dataDefault);
  }
};
