import orderby from "lodash.orderby";

type ContactProps = {
  id: string;
  username: string;
  avatar: string;
  registeredAt: string;
  address: string;
  phone: string;
};

type SortParam = {
  prop: string;
  direction: string;
};

interface ISortProps {
  setSortingData: (value: ContactProps[]) => void;
  sortingData: ContactProps[];
  sort: SortParam;
  dataDefault: ContactProps[];
}

export const SortByLodashContact = ({
  sort,
  setSortingData,
  sortingData,
  dataDefault,
}: ISortProps) => {
  const sortingDataCopy = [...sortingData];
  const direction = sort.direction === "asc" ? "asc" : "desc";
  const propName =
    sort.prop === "Name"? "username" : "" ||
    sort.prop === "Address"? "address" : "";
  const newSortingData = orderby(sortingDataCopy, [propName], [direction]);
  setSortingData(newSortingData);

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
