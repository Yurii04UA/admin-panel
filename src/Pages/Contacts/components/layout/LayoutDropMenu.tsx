import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";

import s from "./LayoutDropMenu.module.scss";

interface ILayoutProps {
  children?: React.ReactNode;
  icon: "sort" | "filter";
  onClick?: () => void;
}

export const LayoutDropMenu: React.FC<ILayoutProps> = ({ icon, onClick }) => {
  return (
    <>
      <button onClick={onClick}>
        {icon === "sort" ? (
          <div className={s.wrapper}>
            <SortIcon /> sort
          </div>
        ) : null}
        {icon === "filter" ? (
          <div className={s.wrapper}>
            <FilterAltIcon /> filter
          </div>
        ) : null}
      </button>
    </>
  );
};
