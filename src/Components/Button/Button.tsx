import './Button.scss';
interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void
};


const Button = ({ children, onClick }: IButtonProps) => {
   
  
    return (
        <>
            <button onClick={onClick} type='submit' className="btn" >{children}</button>
        </>
    );
};

export default Button;