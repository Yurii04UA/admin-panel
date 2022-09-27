import { useState } from "react";
import "./Input.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface IInput {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  icon: boolean;
  error?: string;
}

export const Input = ({
  label,
  type,
  placeholder,
  value,
  setValue,
  icon,
  error,
}: IInput) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <label className="label">
        {label}
        <input
          type={!showPass ? type : ""}
          placeholder={placeholder}
          value={value}
          autoComplete='on'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        {icon && (
          <button
            onClick={() => setShowPass(!showPass)}
            type="button"
            className="icon"
          >
            {showPass ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
          </button>
        )}
      </label>
      <div className="error">{error}</div>
    </>
  );
};
