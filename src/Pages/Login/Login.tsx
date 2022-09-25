import { useState } from "react";
import { AuthWindow } from "../../Components/Auth/AuthWindow/index";
import { Input } from "../../Components/Auth/Form/Input/index";
import { Button } from "../../Components/Button/index";
import { REG } from "../../Constans/Constans";
import { useNavigate } from "react-router-dom";

import "./Login.scss";



export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const navigate = useNavigate();


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
      navigate('/admin/overview');
      setEmail("");
      setPassword("");
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
          title: "Log In to Dashboard Kit",
          subtitle: "Enter your email and password",
        }}
      >
        <form onSubmit={submitHandler}>
          <Input
            label="email"
            type="text"
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
        </form>
      </AuthWindow>
    </>
  );
};
