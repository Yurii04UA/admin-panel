import React from "react";
import "./Input.scss";

interface IInput {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  icon:boolean;
}

export const Input = ({
      label,
      type,
      placeholder,
      value,
      setValue,
      icon
}: IInput) => {
  return (
    <label className="label">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      {icon && 
         <button type="button" className="icon">
         a
         </button>}
    </label>
  );
};
