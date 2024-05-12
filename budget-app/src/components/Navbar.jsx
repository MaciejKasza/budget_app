import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserLogout } from "../hooks/user/useUserLogout";
import { useUserLogin } from "../hooks/user/useUserLogin";
import {
  FaSignOutAlt,
  FaCreditCard,
  FaChartLine,
  FaUser,
} from "react-icons/fa";
import {
  FaMoneyBillTrendUp,
  FaMoneyBillTransfer,
  FaGear,
} from "react-icons/fa6";

import { Button } from "./formComponents/Button";
import ROUTES from "../utils/Routes";
import styled from "styled-components";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useUserLogout();
  const { login } = useUserLogin();

  const handleLogout = () => {
    logout();
  };

  return (
    <StyledNavbar>
      <StyledUserIcon>
        <FaUser />
        <div className="user-info">
          <h2>Tery</h2>
        </div>
      </StyledUserIcon>
      <StyledMainNav>
        <NavItem to={ROUTES.MAIN_DASHBOARD}>
          <FaChartLine />
          Dashboard
        </NavItem>
        <NavItem to={ROUTES.TRANSACTION_DASHBOARD}>
          <FaCreditCard />
          View Transactions
        </NavItem>
        <NavItem to={ROUTES.INCOME_DASHBOARD}>
          <FaMoneyBillTrendUp />
          Incomes
        </NavItem>
        <NavItem to={ROUTES.EXPENS_DASHBOARD}>
          <FaMoneyBillTransfer />
          Expense
        </NavItem>
      </StyledMainNav>
      <StyledBottomNav>
        <NavItem to={ROUTES.SETTINGS}>
          <FaGear />
          Settings
        </NavItem>
        <StyledNavItem onClick={handleLogout}>
          <FaSignOutAlt />
          Logout
        </StyledNavItem>
      </StyledBottomNav>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  width: 300px;

  background-color: var(--color-gray);
  border-radius: 16px;
  border: 4px solid var(--color-white);
`;

const StyledUserIcon = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    padding: 0.2rem;
    box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
  }
  h2 {
    color: var(--color-blue);
  }
  p {
    color: var(--color-blue);
  }
`;

const StyledMainNav = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

const StyledNavItem = styled.div`
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

const StyledBottomNav = styled.div``;
