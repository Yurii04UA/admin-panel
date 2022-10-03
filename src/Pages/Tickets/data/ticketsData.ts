import { faker } from "@faker-js/faker";
import uuid from "react-uuid";
import { useState } from 'react';


interface ITicketProps {
  id: string
  title: string;
  username: string;
  avatar: string;
  registeredAt: string
  registeredTime: string
  statuses: string
  updateTime: string
}

export const TicketsData: ITicketProps[] = [];
const statuses = ["low", "normal", "high"];
const updateTime = ['Updated 1 day ago','Updated 2 days ago','Updated 3 days ago','Today','Updated 4 days ago'];


export function createRandomUser(): ITicketProps {
  return {
    id: uuid(),
    title: faker.lorem.paragraph().slice(-20),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    registeredAt: faker.date.past().toLocaleDateString(),
    registeredTime: faker.date.past().toLocaleTimeString('en-US').slice(0, 4) + ' PM',
    statuses: statuses[Math.floor(Math.random() * statuses.length)],
    updateTime: updateTime[Math.floor(Math.random() * updateTime.length)],
  };
}

Array.from({ length: 50 }).forEach(() => {
  TicketsData.push(createRandomUser());
});
