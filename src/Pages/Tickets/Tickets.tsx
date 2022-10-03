import { Title } from '../../Components/Title';
import { TicketsTable } from './components';
import { TicketsData } from './data/ticketsData';

import s from './Tickets.module.scss';

export const Tickets = () => {
  
  return (
    <div className='tickets'>
      <Title title='Tickets' />
    <TicketsTable />
   </div>
  );
};
