import { useState } from "react";

import { Button } from "components/button/buttonBasic";
import { Input } from "components/form/input";
import { InputFile } from "components/form/inputFile";
import { useAvatar } from "hooks/useAvatar";

import s from "./Form.module.scss";

export const Form = () => {
  const data = {
    email: localStorage.getItem("email") as string,
    name: localStorage.getItem("name") as string,
    lastName: localStorage.getItem("lastName") as string,
    pass: localStorage.getItem("pass") as string,
  };

  const [email, setEmail] = useState(data.email);
  const [name, setName] = useState(data.name);
  const [lastName, setLastName] = useState(data.lastName);
  const [pass, setPass] = useState(data.pass);
  const [isChange, setIsChange] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const { changeAvatar: changeAvatar, avatarUrl } = useAvatar();

  const changeValue = (key: string, newValue: string) => {
    localStorage.removeItem(key);
    localStorage.setItem(key, newValue);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let isChange = false;
    if (email != data.email) {
      changeValue("email", email);
      isChange = true;
    }
    if (name != data.name) {
      changeValue("name", name);
      isChange = true;
    }
    if (lastName != data.lastName) {
      changeValue("lastName", lastName);
      isChange = true;
    }
    if (pass != data.pass) {
      changeValue("pass", pass);
      isChange = true;
    }
    if (isChange) {
      setIsChange(true);
    }
    if (avatarUrl) {
      changeAvatar();
      setIsChange(true);
      setShowPreview(false);
    }
  };

  return (
    <>
      {isChange ? (
        <div className={s.modal}>
          <div className={s.result}>
            your data has been successfully changed. Reboot may be required to
            display
            <Button
              type="button"
              children="OK"
              onClick={() => setIsChange(false)}
            />
          </div>
        </div>
      ) : null}
      <form className={s.form} onSubmit={submitHandler}>
        <InputFile showPreview={showPreview} />
        <Input
          label="email"
          placeholder="email"
          value={email}
          setValue={setEmail}
          icon={false}
          type="email"
        />
        <Input
          label="name"
          placeholder="name"
          value={name}
          setValue={setName}
          icon={false}
          type="text"
        />
        <Input
          label="last name "
          placeholder="last name"
          value={lastName}
          setValue={setLastName}
          icon={false}
          type="text"
        />
        <Input
          label="password"
          placeholder="password"
          value={pass}
          setValue={setPass}
          icon={true}
          type="password"
        />
        <Button type="submit" children="Save changes " />
      </form>
    </>
  );
};
