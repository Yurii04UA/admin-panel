import { faker } from "@faker-js/faker";
import uuid from "react-uuid";


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

const statuses = ["low", "normal", "high"];
const updateTime = ['Updated 1 day ago', 'Updated 2 days ago', 'Updated 3 days ago', 'Today', 'Updated 4 days ago'];

export const TicketsData: ITicketProps[] = [];

function createRandomUser(): ITicketProps {
  return {
    id: uuid(),
    title: faker.lorem.paragraph().slice(0, 15),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    registeredAt: faker.date.past().toLocaleDateString('en-US'),
    registeredTime: faker.date.past().toLocaleTimeString().slice(0, 5),
    statuses: statuses[Math.floor(Math.random() * statuses.length)],
    updateTime: updateTime[Math.floor(Math.random() * updateTime.length)],
  };
}

Array.from({ length: 50 }).forEach(() => {
  TicketsData.push(createRandomUser());
});
