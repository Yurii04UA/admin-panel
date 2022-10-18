import { createContext, useState } from "react";
import { ContactsData } from "data";

type ContactProps = {
  id: string;
  username: string;
  avatar: string;
  registeredAt: string;
  address: string;
  phone: string;
};

type SortProps = {
  prop: string;
  direction: string;
};

export const ContactsContext = createContext({
  sortingData: ContactsData,
  setSortingData: (value:ContactProps[]) => {},
  showModal: '',
  setShowModal: (value:string) => {},
  newItem: {
    id: "",
    avatar: "",
    username: "",
    registeredAt: "",
    address: "",
    phone: "",
  },
  setNewItem: (value: ContactProps) => {},
  sort:{
    prop: "none",
    direction: "none",
  },
  setSort: (value:SortProps) => {},
  editItem:{
    id: "",
    avatar: "",
    username: "",
    registeredAt: "",
    address: "",
    phone: "",
  },
  setEditItem: (value: ContactProps) => {},
});

interface IChildren {
  children: React.ReactNode;
}
export const ContactsProvider: React.FC<IChildren> = ({ children }) => {
  // show modal for delete and edit item
  const [showModal, setShowModal] = useState("");
  // item to add to data
  const [newItem, setNewItem] = useState({
    id: "",
    avatar: "",
    username: "",
    registeredAt: "",
    address: "",
    phone: "",
  });

  // saving state sorting
  const [sort, setSort] = useState({
    prop: "none",
    direction: "none",
  });

  //edit item 
  const [editItem, setEditItem] = useState({
    id: "",
    avatar: "",
    username: "",
    registeredAt: "",
    address: "",
    phone: "",
  });

  // data
  // const [sortingData, setSortingData] = useState([{
  //   id: "",
  //   avatar: "",
  //   username: "",
  //   registeredAt: "",
  //   address: "",
  //   phone: "",
  // }]);
  const [sortingData, setSortingData] = useState(ContactsData);

  const value = { 
    showModal, 
    setShowModal, 
    newItem, 
    setNewItem, 
    sort, 
    setSort, 
    editItem, 
    setEditItem,
    sortingData, 
    setSortingData };
  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};
