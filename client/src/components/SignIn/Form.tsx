import * as React from "react";

import TitleForm from "../UI/TitleForm";
import WrapperInput from "../UI/WrapperInput";
import Input from "../UI/Input";
import Button from "../UI/Button";
import {create} from './api-sign-in'

interface ISignInProps {}

type TInputEvent = React.ChangeEvent<HTMLInputElement>

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {
  const [inputs, setInputs] = React.useState({email: '', password: ''})

  const onInputHandler = (e: TInputEvent, type: string) => {
    setInputs({...inputs, [type]: e.target.value})
  }

  const submitFormHandler = async () => {
    const response = await create()
  }

  return (
    <>
      <TitleForm link="/signin" title="Sign in" linkDescr="Need an account?" className="mt-5" />
      <WrapperInput>
        <Input placeholder="Email" type="email" onInput={(e: TInputEvent) => onInputHandler(e, "email")}/>
        <Input placeholder="Password" type="password" onInput={(e: TInputEvent) => onInputHandler(e, "password")}/>
        <Button className="self-end mt-4">Sign up</Button>
      </WrapperInput>
    </>
  );
};

export default SignIn;
