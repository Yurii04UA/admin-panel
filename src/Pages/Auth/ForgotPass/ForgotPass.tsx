import { useState } from "react";

import { AuthWindow, Input } from "../components";
import { Button } from "../../../Components/Button";
import { REG } from "../../../Constants";

export const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [showResult, setShowResult] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    let err = false;
    event.preventDefault();
    setEmailErr("");
    if (!REG.test(String(email).toLocaleLowerCase())) {
      setEmailErr("Incorrect email");
      err = true;
    }

    if (!email) {
      setEmailErr("Field must not be empty");
      err = true;
    }

    if (!err) {
      setEmail("");
      setShowResult(true);
    }
  };

  const result = (
    <AuthWindow
      isFooter={false}
      isForgot={false}
      title={{
        title: "Forgot password?",
        subtitle:
          "Link to change your password has been sent to provided email if we have it inside our system",
      }}
      children=""
    />
  );

  const forgot = (
    <AuthWindow
      isFooter={true}
      isForgot={false}
      title={{
        title: "Forgot password?",
        subtitle: "Enter your email from registered account",
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
        <Button children={"Send"} type="submit" />
      </form>
    </AuthWindow>
  );
  return <>{showResult ? result : forgot}</>;
};


