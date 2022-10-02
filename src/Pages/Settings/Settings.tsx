import { Title } from '../../Components/Title';
import { Form } from './components/Form';

import s from './Settings.module.scss';

export const Settings = () => {
  

  return (
    <div className={s.settings}>
      <Title title='Settings'/>
      <Form />
    </div>
  );
};
