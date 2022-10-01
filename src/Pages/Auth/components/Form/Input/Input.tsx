import { useState } from "react";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import s from './Input.module.scss';

interface IInput {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  icon: boolean;
  error?: string;
}

export const Input: React.FC<IInput> = ({label, type, placeholder, value, setValue, icon, error}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <label className={s.label}>
        {label}
        <input
          type={!showPass ? type : ""}
          placeholder={placeholder}
          value={value}
          autoComplete="on"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        {icon && (
          <button
            onClick={() => setShowPass(!showPass)}
            type="button"
            className={s.icon}
          >
            {showPass ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
          </button>
        )}
      </label>
      <div className="error">{error}</div>
    </>
  );
};
