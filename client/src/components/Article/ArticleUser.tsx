import * as React from "react";
import styled from "styled-components";
import cn from "classnames";

interface IArticleUserProps {
  image: string;
  username: string;
  date: string;
  className?: string;
  usernameColor?: string;
}
interface IUserNameProps {
  usernameColor?: string;
}

const ArticleUser: React.FunctionComponent<IArticleUserProps> = (props) => {
  const { image, username, date } = props;

  const preparedDate = new Date(date).toDateString().split(" ").slice(1);
  const [month, day, year] = preparedDate;
  return (
    <div className={cn("flex items-center", { [props.className!]: props.className })}>
      <Avatar src={image} alt="Аватар" className="row-span-full rounded mr-1 " />
      <div>
        <UserName className="font-medium" usernameColor={props.usernameColor}>
          {username}
        </UserName>
        <DateText>
          {month} {day}, {year}
        </DateText>
      </div>
    </div>
  );
};

const Avatar = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const UserName = styled.p`
  color: ${(props: IUserNameProps) => (props.usernameColor ? props.usernameColor : "white")};
`;

const DateText = styled.p`
  font-size: 0.8rem;
  color: #bbb;
`;

export default ArticleUser;
