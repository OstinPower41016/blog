import * as React from "react";

import TitleForm from "../UI/TitleForm";
import Input from "../UI/Input";
import WrapperInput from "../UI/WrapperInput";
import Button from "../UI/Button";
import { create, IRequestCreateUser } from "./api-sign-up";

interface ISignUpProps {}
type TInputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {
  const [inputs, setInput] = React.useState<IRequestCreateUser>({
    username: "",
    email: "",
    password: "",
  });

  const onInputHandler = (e: TInputChangeEvent, type: string) => {
    setInput({ ...inputs, [type]: e.target.value });
  };

  const submitButtonHandler = async () => {
    await create({ ...inputs });
  };

  return (
    <div className="container">
      <TitleForm link="/signup" title="Sign up" linkDescr="Have an account?" className="mt-5" />
      <WrapperInput>
        <Input
          placeholder="Username"
          onInput={(e: TInputChangeEvent) => onInputHandler(e, "username")}
        />
        <Input
          placeholder="Email"
          type="email"
          onInput={(e: TInputChangeEvent) => onInputHandler(e, "email")}
        />
        <Input
          placeholder="Password"
          type="password"
          onInput={(e: TInputChangeEvent) => onInputHandler(e, "password")}
        />
        <Button className="self-end mt-4" onClick={submitButtonHandler}>
          Sign up
        </Button>
      </WrapperInput>
    </div>
  );
};

export default SignUp;
