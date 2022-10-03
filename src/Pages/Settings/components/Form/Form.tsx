import { useState } from "react";

import { Button } from "../../../../Components/Button";
import { Input } from "../../../../Components/Form/Input";
import { InputFile } from "../../../../Components/Form/InputFile";
import { useAvatar } from "../../../../Hooks/useAvatar";

import s from "./Form.module.scss";

export const Form = () => {
  const emaliData = localStorage.getItem("email");
  const nameData = localStorage.getItem("name");
  const lastNameData = localStorage.getItem("lastName");
  const passData = localStorage.getItem("pass");
  

  const [email, setEmail] = useState(emaliData as string);
  const [name, setName] = useState(nameData as string);
  const [lastName, setLastName] = useState(lastNameData as string);
  const [pass, setPass] = useState(passData as string);
  const [isChange, setIsChange] = useState(false);
  const [showPreview,setShowPreview] = useState(true);
  const {changeAvatar: changeAvatar,avatarUrl} = useAvatar();

  const changeValue = (key: string, newValue: string) => {
    localStorage.removeItem(key);
    localStorage.setItem(key, newValue);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let change = false;
    if (email != emaliData) {
      changeValue("email", email);
      change = true;
    }
    if (name != nameData) {
      changeValue("name", name);
      change = true;
    }
    if (lastName != lastNameData) {
      changeValue("lastName", lastName);
      change = true;
    }
    if (pass != passData) {
      changeValue("pass", pass);
      change = true;
    }
    if (change) {
      setIsChange(true);  
    }
    if(avatarUrl){
      changeAvatar();
      setShowPreview(false);
    }
  };

  return (
    <>
      {isChange ? (
        <div className={s.modal}>
          <div className={s.result}>
          your data has been successfully changed. Reboot may be required to display
            <Button type="button" children='OK' onClick={() => setIsChange(false)}/>
            
          </div>
        </div>
      ) : null}
      <form className={s.form} onSubmit={submitHandler}>
        <InputFile showPreview={showPreview}/>
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
