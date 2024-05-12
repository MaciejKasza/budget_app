import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = ({ children, to, isActive }) => {
  return <StyledNavItem to={to}>{children}</StyledNavItem>;
};

const StyledNavItem = styled(NavLink)`
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  margin: 0.6rem 0;
  font-weight: 500;
  padding-left: 1rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  color: var(--color-light);
  position: relative;

  svg {
    color: var(--color-light);
    font-size: 1.4rem;
    transition: all 0.4s ease-in-out;
  }
  &:hover {
    color: var(--color-blue) !important;
    svg {
      color: var(--color-blue) !important;
    }
  }

  &.active {
    color: var(--color-blue) !important;
    font-weight: 700;
    svg {
      color: var(--color-blue) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: var(--color-blue);
      border-radius: 10px 10px 10px 10px;
    }
  }
`;
