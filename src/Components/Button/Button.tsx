import s from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "submit" | "button";
}

export const Button: React.FC<IButtonProps> = ({ children, onClick, type }) => {
  return (
    <>
      <button onClick={onClick} type={type} className={s.btn}>
        {children}
      </button>
    </>
  );
};
