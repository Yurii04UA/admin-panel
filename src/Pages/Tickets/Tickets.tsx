import { Title } from '../../Components/Title';
import { MyTable } from './components/table/MyTable';


export const Tickets = () => {
  
  return (
    <div className='tickets'>
      <Title title='Tickets' />
    <MyTable />
   </div>
  );
};
