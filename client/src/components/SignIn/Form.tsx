import * as React from "react";
import { useHistory } from "react-router-dom";

import TitleForm from "../UI/TitleForm";
import WrapperInput from "../UI/WrapperInput";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { login } from "../api/sign-in";
import type { TInputEvent } from "../../types";

interface ISignInProps {}

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {
  const [inputs, setInputs] = React.useState({ email: "", password: "" });
  const history = useHistory();

  const onInputHandler = (e: TInputEvent, type: string) => {
    setInputs({ ...inputs, [type]: e.target.value });
  };

  const submitFormHandler = async () => {
    const response = await login({ ...inputs });
    if (response?.statusText === "OK") {
      history.push("/");
    }
  };

  return (
    <>
      <TitleForm link="/signin" title="Sign in" linkDescr="Need an account?" className="mt-5" />
      <WrapperInput>
        <Input
          placeholder="Email"
          type="email"
          onInput={(e: TInputEvent) => onInputHandler(e, "email")}
        />
        <Input
          placeholder="Password"
          type="password"
          onInput={(e: TInputEvent) => onInputHandler(e, "password")}
        />
        <Button className="self-end mt-4" onClick={submitFormHandler}>
          Sign up
        </Button>
      </WrapperInput>
    </>
  );
};

export default SignIn;
