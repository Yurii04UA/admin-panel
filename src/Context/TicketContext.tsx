import { createContext, useState } from "react";
import { TicketsData } from "data";

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
type SortProps = {
  prop: string;
  direction: string;
};
type FilterProps = {
  prop: string;
  state: string;
};

export const TicketContext = createContext({
  showModal: "",
  setShowModal: (value: string) => {},
  sortingData: TicketsData,
  setSortingData: (value: ITicketProps[]) => {},
  sort: {
    prop: "none",
    direction: "none",
  },
  setSort: (value: SortProps) => {},
  filter: {
    prop: "none",
    state: "none",
  },
  setFilter: (value: FilterProps) => {},
  newItem: {
    id: "",
    title: "",
    username: "",
    avatar: "",
    registeredAt: "",
    registeredTime: "",
    statuses: "",
    updateTime: "",
  },
  setNewItem: (value: ITicketProps) => {},
  editItem: {
    id: "",
    title: "",
    username: "",
    avatar: "",
    registeredAt: "",
    registeredTime: "",
    statuses: "",
    updateTime: "",
  },
  setEditItem: (value: ITicketProps) => {},
});

interface IChildren {
  children: React.ReactNode;
}

export const TicketProvider: React.FC<IChildren> = ({ children }) => {
  const [showModal, setShowModal] = useState("");

  const [sort, setSort] = useState({
    prop: "none",
    direction: "none",
  });
  const [filter, setFilter] = useState({
    prop: "none",
    state: "none",
  });

  const [sortingData, setSortingData] = useState(TicketsData);

  const [newItem, setNewItem] = useState({
    id: "",
    title: "",
    username: "",
    avatar: "",
    registeredAt: "",
    registeredTime: "",
    statuses: "",
    updateTime: "",
  });

  const [editItem, setEditItem] = useState({
    id: "",
    title: "",
    username: "",
    avatar: "",
    registeredAt: "",
    registeredTime: "",
    statuses: "",
    updateTime: "",
  });

  const value = {
    showModal,
    setShowModal,
    sortingData,
    setSortingData,
    sort,
    setSort,
    filter,
    setFilter,
    newItem,
    setNewItem,
    editItem,
    setEditItem,
  };
  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
};
