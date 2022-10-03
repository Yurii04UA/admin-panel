import { createContext, useState } from "react";

export const AvatarContext = createContext({
  isChangeAvatar: false,
  avatarUrl: null as any,
  changeAvatar: () => {},
  setAvatar: (url: string | ArrayBuffer | null) => {
    url;
  },
});

interface IChildren {
  children: React.ReactNode;
}

export const AvatarProvider: React.FC<IChildren> = ({ children }) => {
  const [isChangeAvatar, setIsChangeAvatar] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | ArrayBuffer | null>(null);

  const changeAvatarTrue = () => setIsChangeAvatar(true);
  const setAvatar = (url: string | ArrayBuffer | null) => setAvatarUrl(url);

  return (
    <AvatarContext.Provider
      value={{changeAvatar: changeAvatarTrue, isChangeAvatar, setAvatar, avatarUrl, }}
    >
      {children}
    </AvatarContext.Provider>
  );
};
