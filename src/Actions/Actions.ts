import { useNavigate } from "react-router-dom";

export const redirectHandler = (url: string) => {
  const navigate = useNavigate();
  navigate(url);
};
