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

export const SortFunctionContact = ({
  sort,
  setSortingData,
  sortingData,
  dataDefault,
}: ISortProps) => {
  // sort by Name
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

  /// sort by Address
  if (sort.prop === "Address" && sort.direction === "desc") {
    const newData = [...sortingData].sort((a, b) =>
      b.phone.toLowerCase() > a.phone.toLowerCase() ? 1 : -1,
    );
    setSortingData(newData);
  } else if (sort.prop === "Address" && sort.direction === "asc") {
    const newData = [...sortingData].sort((a, b) =>
      a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1,
    );
    setSortingData(newData);
  }

  /// sort by Date
  if (sort.prop === "Date" && sort.direction === "desc") {
    const newData = [...sortingData].sort((a, b) => {
      return Date.parse(a.registeredAt) - Date.parse(b.registeredAt);
    });
    setSortingData(newData);
  } else if (sort.prop === "Date" && sort.direction === "asc") {
    const newData = [...sortingData].sort((a, b) => {
      return Date.parse(b.registeredAt) - Date.parse(a.registeredAt);
    });
    setSortingData(newData);
  }
  if (sort.prop === "Default") {
    setSortingData(dataDefault);
  }
};
