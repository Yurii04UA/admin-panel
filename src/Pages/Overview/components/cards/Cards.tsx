import { useState } from "react";

import { Card } from "../card";
import { cardsDate } from "./mock/cardsDate";

import s from "./Cards.module.scss";

export const Cards = () => {
  const [cards, setCards] = useState({
    label: "Overdue",
    state: true,
  });

  const clickHandler = (label: string) => {
    if (cards.label != label) {
      setCards({
        label: label,
        state: false,
      });
    } else {
      setCards({
        label: label,
        state: cards.state === false ? true : false,
      });
    }
  };

  return (
    <div className={s.cards}>
      {cardsDate.map((card) => {
        const isActive = card.label === cards.label ? true : false;
        return (
          <Card
            key={card.label}
            label={card.label}
            value={card.value}
            isActive={isActive}
            onClick={() => clickHandler(card.label)}
          />
        );
      })}
    </div>
  );
};
// export const Cards = () => {
//   const [unresolver, setUnresolver] = useState(false);
//   const [overdue, setOverdue] = useState(true);
//   const [open, setOpen] = useState(false);
//   const [hold, setHold] = useState(false);

//   return (
//     <div className={s.cards}>
//       <Card
//         title="Unresolved"
//         number={60}
//         value={unresolver}
//         onClick={() => {
//           setOverdue(false);
//           setOpen(false);
//           setHold(false);
//           setUnresolver(true);
//         }}
//       />
//       <Card
//         title="Overdue"
//         number={16}
//         value={overdue}
//         onClick={() => {
//           setOpen(false);
//           setHold(false);
//           setUnresolver(false);
//           setOverdue(true);
//         }}
//       />
//       <Card
//         title="Open"
//         number={43}
//         value={open}
//         onClick={() => {
//           setOverdue(false);
//           setHold(false);
//           setUnresolver(false);
//           setOpen(true);
//         }}
//       />
//       <Card
//         title="On hold"
//         number={64}
//         value={hold}
//         onClick={() => {
//           setOverdue(false);
//           setUnresolver(false);
//           setOpen(false);
//           setHold(true);
//         }}
//       />
//     </div>
//   );
// };
