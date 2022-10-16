import { useState } from "react";
import { TableCell, TableRow, Avatar } from "@mui/material";

// import { Table } from "./components/table";
import { Header } from "components/header";
import { ContactsProvider } from "context/ContactsContext";
import { Table } from "components/table";
import { contactsLabel } from "./mock/contactsLabel";
import { ContactsData } from "./mock/contactsData";
import { Popup } from "components/table/popup";
import { ButtonDots } from "components/table/buttonDots";

import s from "./Contacts.module.scss";
import { FormContacts } from "components/table/formContacts/FormContacts";

export const Contacts = () => {
  const [data, setData] = useState(ContactsData);
  const [popupId, setPopupId] = useState("");
  const [item, setItem] = useState(); 
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const renderItem = () => {
    const render = data.map((item) => {
      return (
        <TableRow key={item.id} className={s.tableRow}>
          <TableCell>
            <Avatar src={item.avatar} alt={item.username} />
            <div>
              <h3>{item.username}</h3>
            </div>
          </TableCell>
          <TableCell>
            <h3>{item.phone}</h3>
          </TableCell>
          <TableCell>
            <h3>{item.address}</h3>
          </TableCell>
          <TableCell>
            <div>{item.registeredAt}</div>
          </TableCell>
          <TableCell>
            <ButtonDots id={item.id} setPopupId={setPopupId} />
            {
              popupId === item.id ?
              <Popup id={item.id} setValue={setData} value={data} type={'contact'} setItem={setItem} setIsShowEditModal={setIsShowEditModal}/> :
                null
            }
          </TableCell>
        </TableRow>
      );
    });
    return render;
  };


  return (
    <div>
      <ContactsProvider>
        <Header title="Contacts" />
        {/* <Table /> */}
        <Table
          labels={contactsLabel}
          renderItem={renderItem}
          hidePopup={setPopupId}
        />
        {isShowEditModal ? <FormContacts title="Edit contact" setIsShowModal={setIsShowEditModal} /> : null}
        
      </ContactsProvider>
    </div>
  );
};
