import { useState } from "react";
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

import s from "./MyTable.module.scss";

export const MyTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [showModal, setShowModal] = useState("");
  const [sortingData,setSortingData] = useState(TicketsData);  
  const [dataDefault,setDataDefault] = useState(TicketsData);
 

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
      <TableContainer component={Paper}>
      <Header
        sortingData={sortingData} 
        setSortingData={setSortingData}
        setDataDefault={setDataDefault}
        dataDefault={dataDefault}/>
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
                <TableRow key={ticket.id} onClick={() => setShowModal("")}>
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
                    <div
                      className={s.btn}
                      style={style}
                    >
                      {ticket.statuses}
                      <Modal 
                        id={ticket.id} 
                        showModal={showModal} 
                        data={sortingData} 
                        setData={setSortingData} 
                        setDataDefault={setDataDefault}/>
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
