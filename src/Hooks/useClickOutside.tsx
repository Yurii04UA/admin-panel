import {  useEffect, useRef } from 'react';

export const useClickOutside = (onClose: () => void) => {
  const ref = useRef(null);
  const click = (e: MouseEvent) => {
    if (!(ref.current! as any)?.contains(e.target)) {
      onClose?.();
    }
    console.log(ref.current, e.target);
  };
    
    
  useEffect(() => {
    document.addEventListener('click', click);
    return () => {
      document.removeEventListener('click', click);
    };
  }, []);
  return ref;
};