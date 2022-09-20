import { useState } from "react";
import AuthWindow from "../../Components/Auth/AuthWindow/AuthWindow";
import { Input } from "../../Components/Auth/Form/Input/Input";
import "./Login.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <AuthWindow
        isFooter={true}
        title={{
          title: "Log In to Dashboard Kit",
          subtitle: "Enter your email and password",
        }}
      >
        <form>
          <Input
            label="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            setValue={setEmail}
            icon={false}
          />
          <Input
            label="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            setValue={setPassword}
            icon={true}
          />
          <button type="submit">sdf</button>
        </form>
      </AuthWindow>
    </>
  );
};
