import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return (
    <div className="flex justify-between items-center container mx-auto py-2 px-4">
      <Logo>conduit</Logo>
      <ul className="flex">
        <ListItem>
          <NavLink to="/" exact activeClassName="active" className="mr-4">
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/signin" activeClassName="active" className="mr-4">
            Sign in
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink activeClassName="active" to="/signup">
            Sign up
          </NavLink>
        </ListItem>
      </ul>
    </div>
  );
};

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
