import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import wave from "../../assets/wave.png";
import {
  menuCategoriesIcon,
  menuExpenseIcon,
  menuGridIcon,
  menuIncomeIcon,
  menuLogoutIcon,
  menuSettingsIcon,
} from "../../assets/svgIcons";

const MenuItem = ({ id, name, path, active, children }) => {
  const icon = () => {
    switch (id) {
      case "home":
        return menuGridIcon;
      case "income":
        return menuIncomeIcon;
      case "expense":
        return menuExpenseIcon;
      case "categories":
        return menuCategoriesIcon;
      case "settings":
        return menuSettingsIcon;
      case "logout":
        return menuLogoutIcon;

      default:
        return null;
    }
  };

  return (
    <StyledMenuItemWrapper end={id === "settings" ? "true" : "false"}>
      {icon()}
      {children}
      <img src={wave} alt="wave" className="wave" />
    </StyledMenuItemWrapper>
  );
};

export default MenuItem;

const StyledMenuItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 8px;
  margin-top: ${({ end }) => (end === "true" ? "auto" : "inherit")};
  transition: 0.3s background-color ease;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.l};

  a {
    width: 100%;
    line-height: 50px;
  }

  .wave {
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    height: 50px;
    width: 15px;
  }

  a.active ~ .wave {
    display: block;
  }

  svg {
    margin-left: 48px;
    path,
    circle {
      stroke: ${({ theme }) => theme.fontColors.primary};
    }
  }

  svg.fill {
    path {
      fill: ${({ theme }) => theme.fontColors.primary};
    }
  }

  &:has(a.active) {
    svg {
      path,
      circle {
        stroke: ${({ theme }) => theme.fontColors.purpure};
      }
      svg.fill {
        path {
          fill: ${({ theme }) => theme.fontColors.purpure};
        }
      }
    }

    background-color: ${({ theme }) => theme.colors.bgUnit2};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgUnit2};
  }
`;
