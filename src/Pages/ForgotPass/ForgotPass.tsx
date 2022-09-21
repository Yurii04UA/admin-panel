
import { useState } from "react";
import AuthWindow from "../../Components/Auth/AuthWindow/AuthWindow";
import { Input } from "../../Components/Auth/Form/Input/Input";
import Button from "../../Components/Button/Button";
import { REG } from "../../Constans/Constans";

interface IForgorPass {
  value?: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}
const ForgotPass = ({setValue}: IForgorPass) => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    let err = false;
    event.preventDefault();
    setEmailErr("");
    if (!REG.test(String(email).toLocaleLowerCase())) {
      setEmailErr("Incorrect email");
      err = true;
    };

    if (!email) {
      setEmailErr("Field must not be empty");
      err = true;
    };

    if(!err){
      setValue(true);
      setEmail('');
    }
  };
  

  return (
  
      <AuthWindow 
        isFooter={true}
        isForgot={false}
        title={{
          title:'Forgot password?',
          subtitle:'Enter your email from registered account'
        }}>
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
            <Button children={'Send'}/>
          </form>
      </AuthWindow>

  );
};

export default ForgotPass;
