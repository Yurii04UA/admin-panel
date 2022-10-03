import { useState, useEffect } from "react";
import { useAvatar } from "../../../Hooks/useAvatar";
import { Avatar } from "../../Avatar";

import s from "./InputFile.module.scss";

interface IInputProps {
  showPreview: boolean;
}

export const InputFile: React.FC<IInputProps> = ({ showPreview }) => {
  const { setAvatar } = useAvatar();
  const [url, setUrl] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    setAvatar(url);
  }, [url]);

  const filerReader = new FileReader();
  filerReader.onloadend = () => {
    setUrl(filerReader.result);
  };

  const loadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    filerReader.readAsDataURL(file as Blob);
  };

  const preview = url ? (
    <div className={s.showAvatar}>
      <img src={url as string} alt="avatar" />
    </div>
  ) : null;
  return (
    <div className={s.avatar}>
      <label className={s.label}>
        <Avatar />
        <input
          type="file"
          className={s.input}
          onChange={loadHandler}
          accept="image/*"
        />
      </label>
      {showPreview ? preview : null}
    </div>
  );
};
