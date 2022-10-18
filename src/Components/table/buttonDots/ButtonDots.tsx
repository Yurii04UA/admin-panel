import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface IButtonDotsProps {
  setPopupId: (value: string) => void;
  id: string;
}

export const ButtonDots: React.FC<IButtonDotsProps> = ({ setPopupId, id }) => {
  return (
    <button
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
        setPopupId(id);
      }}
    >
      <MoreVertIcon />
    </button>
  );
};
