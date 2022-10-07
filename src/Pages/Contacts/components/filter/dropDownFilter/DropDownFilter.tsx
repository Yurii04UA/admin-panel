import CheckIcon from '@mui/icons-material/Check';

import s from './DropDownFilter.module.scss';

type FilterProps = {
  prop: string;
  state: string;
};
interface IDropDownProps {
 filter: FilterProps;
 setFilter: (value: any) => void;
}

const buttons = ['Low', 'Normal', 'High', 'Default'];

export const DropDownFilter: React.FC<IDropDownProps> = ({filter, setFilter}) => {

  const clickHandler = (propName: string) => {
    if (propName != "Default") {
      if (filter.prop != propName) {
        setFilter({
          prop: propName,
          state: "active",
        });
      } else {
        setFilter({
          ...filter,
          state: filter.state === "active" ? "disabled" : "active",
        });
      }
    } else {
      setFilter({
        prop: propName,
        state: "none",
      });
    }
  };

  const check = filter.state === 'active'? <CheckIcon /> : null;

  return (
   <div className={s.dropDown}>
      {buttons.map(btn => {
        return (
          <button key={btn} onClick={() => clickHandler(btn)}>
            {btn}
            {btn === filter.prop? check : null}
          </button>
        );
      })}
   </div>
  );
};
