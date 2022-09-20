import AuthWindow from "../../Components/Auth/AuthWindow/AuthWindow";
import "./Login.scss";

export const Login = () => {
  return (
    <>
      <AuthWindow isFooter={true} title={{ title: "Log In to Dashboard Kit", subtitle: "Enter your email and password" }}>
      </AuthWindow>
    </>
  );
};
