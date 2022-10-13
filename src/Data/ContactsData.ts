import { faker } from "@faker-js/faker";
import uuid from "react-uuid";


interface IContactProps {

  id: string
  username: string;
  avatar: string;
  registeredAt: string; 
  address:string;
  phone: string;
}

export const ContactsData: IContactProps[] = [];


export function createRandomUser(): IContactProps {
  return {
    id: uuid(),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    registeredAt: faker.date.past().toLocaleDateString('en-US'),
    address: faker.address.city(),
    phone: faker.phone.number('+###-###-###-###')
  };
}

Array.from({ length: 50 }).forEach(() => {
  ContactsData.push(createRandomUser());
});
