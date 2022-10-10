import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TablePagination,
  TableFooter,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Modal } from "../modal/Modal";
import { ContactsData } from "../../../../Data/ContactsData";
import { Header } from "../header";
import { SortFunctionContact } from "../../../../SortingAndFilter/SortFunctionContact";

import s from "./MyTable.module.scss";

export const MyTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [showModal, setShowModal] = useState("");
  const [sortingData, setSortingData] = useState(ContactsData);
  const [dataDefault, setDataDefault] = useState(ContactsData);

  const [sort, setSort] = useState({
    prop: "none",
    direction: "none",
  });
  const [newItem, setNewItem] = useState({
    id: "",
    avatar: "",
    username: "",
    registeredAt: "",
    address: "",
    phone: "",
  });
  const [isDeletItem, setIsDeletItem] = useState(false);
  const [editItem, setEditItem] = useState({
    id: "",
    avatar: "",
    username: "",
    registeredAt: "",
    address: "",
    phone: "",
  });

  //Table handlers
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // sort/filter
  useEffect(() => {
    SortFunctionContact({ sort, setSortingData, sortingData, dataDefault });
  }, [sort]);

  // added new item
  useEffect(() => {
    if (newItem.id) {
      const newData = [...sortingData];
      newData.unshift(newItem);
      setSortingData(newData);
      setDataDefault(newData);
    }
  }, [newItem]);

  //delete item
  const deleteHandler = () => {
    if (isDeletItem) {
      const newData = [...sortingData].filter((task) => task.id != showModal);
      setSortingData(newData);
      setDataDefault(newData);
    }
  };

  useEffect(() => {
    deleteHandler();
  }, [isDeletItem]);

  //edit item
  const editItemFunction = () => {
    if (editItem.id) {
      const newData = [...sortingData].map((item) => {
        if (item.id === editItem.id) {
          item.username = editItem.username;
          item.phone = editItem.phone;
          item.address = editItem.address;
        }
        return item;
      });
      setSortingData(newData);
    }
  };

  useEffect(() => {
    editItemFunction();
  }, [editItem]);

  return (
    <TableContainer component={Paper}>
      <Header sort={sort} setSort={setSort} setNewItem={setNewItem} />
      <Table aria-label="simple table" className={s.table}>
        <TableHead>
          <TableRow>
            <TableCell className={s.title}>Name</TableCell>
            <TableCell className={s.title}>Phone</TableCell>
            <TableCell className={s.title}>Address</TableCell>
            <TableCell className={s.title}>Created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortingData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((contact) => {
              return (
                <TableRow key={contact.id} onClick={() => setShowModal("")}>
                  <TableCell className={s.details}>
                    <Avatar src={contact.avatar} alt={contact.username} />
                    <div>
                      <h3>{contact.username}</h3>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h3>{contact.phone}</h3>
                  </TableCell>
                  <TableCell>
                    <h3>{contact.address}</h3>
                  </TableCell>
                  <TableCell className={s.priority}>
                    <div>
                      {contact.registeredAt}
                      <Modal
                        data={sortingData}
                        setData={setSortingData}
                        id={contact.id}
                        showModal={showModal}
                        setIsDeletItem={setIsDeletItem}
                        setShowModal={setShowModal}
                        setEditItem={setEditItem}
                      />
                    </div>
                    <button
                      className={s.modalBtn}
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        setShowModal(contact.id);
                      }}
                    >
                      <MoreVertIcon />
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
      <TablePagination
        rowsPerPageOptions={[8, 16, 32]}
        component="div"
        count={sortingData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
