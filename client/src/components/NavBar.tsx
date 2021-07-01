import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

import useAuthenticate from "../hooks/use/Authenticate";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const isAuthenticate = useAuthenticate();
  const username = localStorage.getItem("username");

  return (
    <div className="flex justify-between items-center container mx-auto py-2">
      <Logo>conduit</Logo>
      <List className="flex">
        <ListItem>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </ListItem>

        {!isAuthenticate && (
          <ListItem>
            <NavLink to="/signin" activeClassName="active">
              Sign in
            </NavLink>
          </ListItem>
        )}

        {!isAuthenticate && (
          <ListItem>
            <NavLink activeClassName="active" to="/signup">
              Sign up
            </NavLink>
          </ListItem>
        )}

        {isAuthenticate && (
          <ListItem>
            <NavLink to="/editor" activeClassName="active" className="flex items-center ">
              <FaRegEdit className="mr-1" />
              <span>New Article</span>
            </NavLink>
          </ListItem>
        )}

        {isAuthenticate && (
          <ListItem>
            <NavLink to="/settings" activeClassName="active" className="flex items-center ">
              <IoIosSettings className="mr-1" />
              <span>Settings</span>
            </NavLink>
          </ListItem>
        )}
        {isAuthenticate && (
          <ListItem>
            <NavLink
              to={`/profile/${username}`}
              activeClassName="active"
              className="flex items-center "
            >
              <span>{username}</span>
            </NavLink>
          </ListItem>
        )}
      </List>
    </div>
  );
};

const List = styled.ul`
  > li {
    margin-right: 1rem;
  }
`;

const Logo = styled.p`
  color: rgb(92, 184, 92);
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Titillium Web";
`;

const ListItem = styled.li`
  color: rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    color: rgba(0, 0, 0, 0.6);
  }
  .active {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export default NavBar;
