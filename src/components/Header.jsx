import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";
import profileImgPlaceholder from "../assets/placeholder48x48.png";
import { useUser } from "../hooks/useUser";

function Header() {
  const { currentPage } = useContext(AppContext);
  const [user, setUser] = useState(null);
  const { loading, error, handleFetchUser } = useUser();
  useEffect(() => {
    async function fetchData() {
      const response = await handleFetchUser();

      setUser(response);
    }
    fetchData();
  }, []);

  return (
    <StyledHeaderWrapper>
      <StyledHeaderContentr>
        <StyledHeader>
          <h2>{currentPage}</h2>
        </StyledHeader>
        <StyledProfileInfo>
          <div className="img">
            <img src={user && user.profileUrl} alt="" />
          </div>
          <div className="info">
            <p className="name">{user && user.name}</p>
            <p className="email">{user && user.email}</p>
          </div>
        </StyledProfileInfo>
      </StyledHeaderContentr>
    </StyledHeaderWrapper>
  );
}

export default Header;

const StyledHeaderWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgUnit1};
  color: ${({ theme }) => theme.fontColors.primary};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-end-start-radius: 8px;
  border-end-end-radius: 8px;
`;

const StyledHeaderContentr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const StyledHeader = styled.div`
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const StyledProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    .img {
      border-color: rgba(123, 87, 224, 1);
    }
    p {
      opacity: 1 !important;
    }
  }

  cursor: pointer;
  & .img {
    position: relative;
    width: 52px;
    aspect-ratio: 1/1;

    border-radius: 50%;
    overflow: hidden;

    border: 4px solid rgba(123, 87, 224, 0.3);
    transition: 0.3s border-color ease-in;

    img {
      width: 100%;
      aspect-ratio: 1/1;
    }
  }

  & .info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    & p {
      opacity: 0.7;
      transition: 0.3s opacity ease-in;
    }

    & .name {
      font-weight: bold;
      text-transform: capitalize;
      color: ${({ theme }) => theme.fontColors.purpure};
      font-size: ${({ theme }) => theme.fontSizes.l};
    }

    & .email {
      text-transform: lowercase;
      color: ${({ theme }) => theme.fontColors.primary};
      font-size: ${({ theme }) => theme.fontSizes.s};
    }
  }
`;
