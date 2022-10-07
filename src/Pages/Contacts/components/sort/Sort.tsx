
import { LayoutDropMenu } from '../layout/LayoutDropMenu';

interface ISortProps{
  setValue: (value: boolean) => void;
  value: boolean;
}

export const Sort: React.FC<ISortProps> = ({ setValue, value }) => {
  return (
  <>
   <LayoutDropMenu icon='sort' onClick={() => setValue(!value)}/>
  </>
  );
};
