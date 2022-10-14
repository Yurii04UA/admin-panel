import { useState } from "react";

import { Card } from "../card";

import s from "./Cards.module.scss";

const cardsArr = [
  {
    label: "Unresolved",
    value: 60,
  },
  {
    label: "Overdue",
    value: 16,
  },
  {
    label: "Open",
    value: 43,
  },
  {
    label: "On hold",
    value: 64,
  },
];

export const Cards = () => {
  const [cards, setCards] = useState({
    label: "Overdue",
    state: false,
  });

  const clickHandler = (label: string) => {
  
  };

  return (
    <div className={s.cards}>
      {cardsArr.map((card) => {
        return (
          <Card
            key={card.label}
            label={card.label}
            value={card.value}
            isActive={cards.state}
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
