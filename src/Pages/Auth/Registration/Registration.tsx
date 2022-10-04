import React, { useState } from "react";

import { AuthWindow, Input } from "../components";
import { Button } from "../../../Components/Button/ButtonBasic";
import { REG, REG_ONLY_LETTER } from "../../../Constants";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [passConfirmErr, setPassConfirmErr] = useState("");
  const [showResult, setShowResult] = useState(false);


  const validationReg = () => {
    let err = false;

    if (!REG.test(String(email).toLocaleLowerCase())) {
      err = true;
      setEmailErr("Incorrect email");
    }

    if (!email) {
      err = true;
      setEmailErr("Field must not be empty");
    }

    if (!pass) {
      err = true;
      setPassErr("Field must not be empty");
    }

    if (!passConfirm) {
      err = true;
      setPassConfirmErr("Field must not be empty");
    }

    if (pass.length < 8 || passConfirm.length < 8) {
      err = true;
      setPassErr("Password must have 8 characters");
      setPassConfirmErr("Password must have 8 characters");
    }

    if (pass != passConfirm) {
      err = true;
      setPassConfirmErr("Passwords must match");
      setPassErr("Passwords must match");
    }

    if (!REG_ONLY_LETTER.test(String(name).toLocaleLowerCase())) {
      err = true;
      setNameErr("Name must contain only letters");
    }

    if (!name) {
      err = true;
      setNameErr("Field must not be empty");
    }

    if (!REG_ONLY_LETTER.test(String(lastName).toLocaleLowerCase())) {
      err = true;
      setLastNameErr("Name must contain only letters");
    }

    if (!lastName) {
      err = true;
      setLastNameErr("Field must not be empty");
    }

    if (!err) {
      setShowResult(true);
      localStorage.setItem('email',email);
      localStorage.setItem('name',name);
      localStorage.setItem('lastName',lastName);
      localStorage.setItem('pass',pass);
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setNameErr("");
    setLastNameErr("");
    setEmailErr("");
    setPassErr("");
    setPassConfirmErr("");
    validationReg();
  };

  const registration = (
    <AuthWindow
      isFooter={false}
      isForgot={false}
      title={{
        title: "Sign Up",
        subtitle: "Create a new account",
      }}
    >
      <form onSubmit={submitHandler}>
        <Input
          label="email"
          type="text"
          placeholder="Enter email"
          value={email}
          setValue={setEmail}
          icon={false}
          error={emailErr}
        />
        <Input
          label="first name"
          type="text"
          placeholder="First name"
          value={name}
          setValue={setName}
          icon={false}
          error={nameErr}
        />
        <Input
          label="last name"
          type="text"
          placeholder="Last name"
          value={lastName}
          setValue={setLastName}
          icon={false}
          error={lastNameErr}
        />
        <Input
          label="password"
          type={"password"}
          placeholder="Password"
          value={pass}
          setValue={setPass}
          icon={true}
          error={passErr}
        />
        <Input
          label="confirm password"
          type={"password"}
          placeholder="Password"
          value={passConfirm}
          setValue={setPassConfirm}
          icon={true}
          error={passConfirmErr}
        />
        <Button children={"Registration"} type="submit" />
      </form>
    </AuthWindow>
  );

  const result = (
    <AuthWindow
      children={""}
      isFooter={false}
      isForgot={false}
      title={{
        title: "Sign Up",
        subtitle: "Success! Your account has been created",
      }}
    ></AuthWindow>
  );
  return <>{showResult ? result : registration}</>;
};
