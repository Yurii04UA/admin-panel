import { LayoutDropMenu } from "../layout/LayoutDropMenu";

interface IFilterProps {
  setValue: (value: boolean) => void;
  value: boolean;
}

export const Filter: React.FC<IFilterProps> = ({ setValue, value }) => {
  return (
    <>
      <LayoutDropMenu
        icon="filter"
        onClick={() => setValue(!value)}>
      </LayoutDropMenu>
    </>
  );
};
