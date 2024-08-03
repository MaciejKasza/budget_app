import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import styled from "styled-components";
import MenuItem from "./NavItem";

function Navigation() {
  const { handleLogout } = useLogout();

  return (
    <StyledNavWrapper>
      <StyledNavContent>
        <StyledLogo>
          <Link to="/">Budget APP</Link>
        </StyledLogo>
        <StyledNav>
          <MenuItem id="home">
            <NavLink to="/">Dasboard</NavLink>
          </MenuItem>
          <MenuItem id="income">
            <NavLink to="/expense">Expense</NavLink>
          </MenuItem>
          <MenuItem id="expense">
            <NavLink to="/income">Income</NavLink>
          </MenuItem>
          <MenuItem id="categories">
            <NavLink to="/categories">Categories</NavLink>
          </MenuItem>
          <MenuItem id="settings">
            <NavLink to="/settings">Settings</NavLink>
          </MenuItem>
          <MenuItem id="logout">
            <Link onClick={handleLogout} to="/">
              Logout
            </Link>
          </MenuItem>
        </StyledNav>
      </StyledNavContent>
    </StyledNavWrapper>
  );
}

export default Navigation;

const StyledNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.bgUnit1};
  height: 100vh;
  padding-bottom: 16px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const StyledNavContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 32px;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  font-size: 32px;
  font-weight: bold;

  color: ${({ theme }) => theme.fontColors.primary};

  transition: 0.3s color ease-in;
  &:hover {
    color: ${({ theme }) => theme.fontColors.purpure};
    cursor: pointer;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
`;

const StyledNavItem = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 8px;
  margin-top: ${({ end }) => (end === "true" ? "auto" : "inherit")};
  transition: 0.3s background-color ease;
  cursor: pointer;

  .wave {
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    height: 50px;
    width: 15px;
  }
`;
