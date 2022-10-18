import { useState } from "react";
import { TableCell, TableRow, Avatar } from "@mui/material";

import { Header } from "components/header";
import { Table } from "components/table";
import { TicketProvider } from "context/TicketContext";
import { TicketsData } from "data";
import { ticketLabel } from "./mock/ticketsLabels";
import { ButtonDots } from "components/table/buttonDots/ButtonDots";
import { Popup } from "components/table/popup/Popup";
// import { MyTable } from "./components/table/MyTable";

import s from './Tickets.module.scss';

export const Tickets = () => {
  const [data, setData] = useState(TicketsData);
  const [popupId, setPopupId] = useState("");
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [item, setItem] = useState(); 

  const renderItem = () => {
    const render = data.map((item) => {
      const style = {
        backgroundColor:
          (item.statuses === "low" ? "#F12B2C" : "") ||
          (item.statuses === "normal" ? "#29CC97" : "") ||
          (item.statuses === "high" ? "#FEC400" : ""),
      };
      return (
        <TableRow key={item.id} className={s.tableRow}>
          <TableCell>
            <Avatar src={item.avatar} alt={item.username} />
            <div>
              <h3>{item.title}</h3>
              <div>{item.updateTime}</div>
            </div>
          </TableCell>
          <TableCell>
            <h3>{item.username}</h3>
            <div>{item.registeredAt}</div>
          </TableCell>
          <TableCell>
            <h3>{item.registeredAt}</h3>
            <div>{item.registeredTime}</div>
          </TableCell>
          <TableCell>
            <div style={style}>
              {item.statuses}
            </div>
          </TableCell>
          <TableCell>
            <ButtonDots id={item.id} setPopupId={setPopupId} />
            {popupId === item.id ? <Popup id={item.id} setValue={setData} value={data} type={'ticket'} setItem={setItem} setIsShowEditModal={setIsShowEditModal} /> : null}
          </TableCell>
        </TableRow>
      );
    });
    return render;
  };
  return (
    <div className="tickets">
      <TicketProvider>
        <Header title="Tickets" />
        {/* <MyTable /> */}
        <Table
          labels={ticketLabel}
          renderItem={renderItem}
          hidePopup={setPopupId}
        />
      </TicketProvider>
    </div>
  );
};
