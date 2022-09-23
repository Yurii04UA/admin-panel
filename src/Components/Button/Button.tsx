import "./Button.scss";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "submit" | "button";
}

export const Button = ({ children, onClick, type }: IButtonProps) => {
  return (
    <>
      <button onClick={onClick} type={type} className="btn">
        {children}
      </button>
    </>
  );
};
