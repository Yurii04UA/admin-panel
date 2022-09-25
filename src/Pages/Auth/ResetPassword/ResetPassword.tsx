import React, { useState } from "react";
import { AuthWindow } from "../../../Components/Auth/AuthWindow/index";
import { Input } from "../../../Components/Auth/Form/Input/Input";
import { Button } from "../../../Components/Button/index";

export const ResetPassword = () => {
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [showResult, setShowResult] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    setErrMessage("");
    let err = false;
    event.preventDefault();
    if (pass != passConfirm) {
      err = true;
      setErrMessage("Passwords must match");
    }

    if (pass.length < 8 || passConfirm.length < 8) {
      err = true;
      setErrMessage("Password must have 8 characters");
    }

    if (!err) {
      setShowResult(true);
      setPass("");
      setPassConfirm("");
    }
  };

  const reset = (
    <AuthWindow
      isFooter={true}
      isForgot={false}
      title={{
        title: "Reset Password",
        subtitle: "Enter new password",
      }}
    >
      <form onSubmit={submitHandler}>
        <Input
          label="new password"
          type="password"
          placeholder="Enter your password"
          value={pass}
          setValue={setPass}
          icon={true}
          error={errMessage}
        />
        <Input
          label="confirm new password "
          type="password"
          placeholder="Enter your password"
          value={passConfirm}
          setValue={setPassConfirm}
          icon={true}
          error={errMessage}
        />
        <Button children={"Send"} type="submit" />
      </form>
    </AuthWindow>
  );

  const result = (
    <AuthWindow
      children=""
      isFooter={false}
      isForgot={false}
      title={{
        title: "Reset Password",
        subtitle: "Password has been changed",
      }}
    />
  );
  return <>{showResult ? result : reset}</>;
};
