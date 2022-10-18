import { useContext } from 'react';
import { AvatarContext } from 'context/AvatarContext';

export const useAvatar = () =>{

  return useContext(AvatarContext);
};