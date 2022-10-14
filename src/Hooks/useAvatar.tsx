import { useContext } from 'react';
import { AvatarContext } from '../Context/AvatarContext';

export const useAvatar = () =>{

  return useContext(AvatarContext);
};