import './ButtonWB.scss';

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "submit" | "button";
  myClass: 'btnWA' | 'btnWF'
}

export const ButtonWB: React.FC<IButtonProps> = ({ children, onClick, type, myClass }) => {
  return (
    <>
      <button onClick={onClick} type={type} className={myClass}>
        {children}
      </button>
    </>
  );
};
