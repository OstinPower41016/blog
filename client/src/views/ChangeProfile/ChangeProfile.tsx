import * as React from "react";
import styled from "styled-components";

import ChangeProfileForm from "../../components/ChangeProfile/ChangeProfileForm";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { getUser } from "../../components/api/user";

interface IChangeProfileProps {}

const ChangeProfile: React.FunctionComponent<IChangeProfileProps> = (props) => {
  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container text-center">
      <ChangeProfileForm className="mt-8" />
      <Wrapper className="w-6/12 mx-auto mt-8 flex flex-col items-center pb-8">
        <Input placeholder="URL of profile picture" />
        <Input placeholder="Username" />
        <TextArea placeholder="Short bio about you " className="rounded mt-4"></TextArea>
        <Input placeholder="Your email" type="email" />
        <Input placeholder="New Password" type="password" />
        <Button className="self-end mt-8">Update Settings </Button>
      </Wrapper>
      <div className="flex w-6/12 mx-auto">
        <ButtonLogout className="rounded mt-4 ">Or click here to logout</ButtonLogout>
      </div>
    </div>
  );
};

const ButtonLogout = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #b85c5c;
  color: #b85c5c;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #ccc;
  > *:not(:last-child) {
    margin-top: 1rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #ccc;
  padding: 1rem;
  min-height: 200px;
  outline: none;
  font-size: 1.25rem;
`;

export default ChangeProfile;
