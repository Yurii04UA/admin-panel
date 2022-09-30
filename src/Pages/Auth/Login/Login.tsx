import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { AuthWindow, Input } from "../components";
import { Button } from "../../../Components/Button";
import { REG } from "../../../Constants";
import { useAuth } from "../../../Hooks/useAuth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [errorMessage,setErrorMassage] = useState('');
  const emailCheck = localStorage.getItem("email");
  const passCheck = localStorage.getItem("pass");

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/admin/overview';
  const { signIn } = useAuth();

  const validateLogin = () => {
    let err = false;
    if (!REG.test(String(email).toLocaleLowerCase())) {
      err = true;
      setEmailErr("Incorrect email");
    }

    if (!email) {
      err = true;
      setEmailErr("Field must not be empty");
    }

    if (!password) {
      err = true;
      setPassErr("Field must not be empty");
    }

    if (!err) {
      if (email != emailCheck || password != passCheck) {
        setErrorMassage('Incorrect login or password');
      }
    }
    if (!err) {
      if (email === emailCheck && password === passCheck) {
        navigate(fromPage);
        setEmail("");
        setPassword("");
        signIn();
      }
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setEmailErr("");
    setPassErr("");
    validateLogin();
  };

  return (
    <>
      <AuthWindow
        isFooter={true}
        isForgot={true}
        title={{
          title: "Log In to Dashboard Kit  uyriparaka@gmail.com",
          subtitle: "Enter your email and password 11111111",
        }}
      >
        <form onSubmit={submitHandler}>
          <Input
            label="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            setValue={setEmail}
            icon={false}
            error={emailErr}
          />
          <Input
            label="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            setValue={setPassword}
            icon={true}
            error={passErr}
          />
          <Button children={"Log In"} type="submit" />
          <div className="error">{errorMessage}</div>
        </form>
      </AuthWindow>
    </>
  );
};
