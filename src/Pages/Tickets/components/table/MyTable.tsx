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
import { TicketsData } from "../../../../Data/TicketsData";
import { Header } from "../header";
import { FilterFunctionTicket } from "../../../../SortingAndFilter/FilterFunctionTicket";
import { useTickets } from "../../../../Hooks/useTickets";
import { SortByLodashTicket } from "../../../../SortingAndFilter/SortByLodashTicket";

import s from "./MyTable.module.scss";

export const MyTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [dataDefault, setDataDefault] = useState(TicketsData);
  const [isDeletItem, setIsDeletItem] = useState(false);

  const {
    showModal,
    setShowModal,
    sortingData,
    setSortingData,
    sort,
    filter,
    newItem,
    editItem,
  } = useTickets();

  // sort and filter
  useEffect(() => {
    SortByLodashTicket({ sort, setSortingData, sortingData, dataDefault });
  }, [sort]);

  useEffect(() => {
    FilterFunctionTicket({ filter, setSortingData, dataDefault });
  }, [filter]);

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
          item.statuses = editItem.statuses;
          item.title = editItem.title;
        }
        return item;
      });
      setSortingData(newData);
    }
  };

  useEffect(() => {
    editItemFunction();
  }, [editItem]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} onClick={() => setShowModal("")}>
      <Header />
      <Table aria-label="simple table" className={s.table}>
        <TableHead>
          <TableRow>
            <TableCell className={s.title}>Ticket details</TableCell>
            <TableCell className={s.title}>Customer name</TableCell>
            <TableCell className={s.title}>Date</TableCell>
            <TableCell className={s.title}>Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortingData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((ticket) => {
              const style = {
                backgroundColor:
                  (ticket.statuses === "low" ? "#F12B2C" : "") ||
                  (ticket.statuses === "normal" ? "#29CC97" : "") ||
                  (ticket.statuses === "high" ? "#FEC400" : ""),
              };
              return (
                <TableRow key={ticket.id}>
                  <TableCell className={s.details}>
                    <Avatar src={ticket.avatar} alt={ticket.username} />
                    <div>
                      <h3>{ticket.title}</h3>
                      <div className={s.timeMarker}>{ticket.updateTime}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h3>{ticket.username}</h3>
                    <div className={s.timeMarker}>{ticket.registeredAt}</div>
                  </TableCell>
                  <TableCell>
                    <h3>{ticket.registeredAt}</h3>
                    <div className={s.timeMarker}>{ticket.registeredTime}</div>
                  </TableCell>
                  <TableCell className={s.priority}>
                    <div className={s.btn} style={style}>
                      {ticket.statuses}
                      <Modal id={ticket.id} setIsDeletItem={setIsDeletItem} />
                    </div>
                    <button
                      className={s.modalBtn}
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        setShowModal(ticket.id);
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
