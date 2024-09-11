import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    body{
        font-family: "Inter", sans-serif;
        color: ${({ theme }) => theme.fontColors.primary};
        background-color: ${({ theme }) => theme.colors.bg};
        max-height: 100vh;
        
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    input,button{
      outline: none;
      border: none;
      background-color: none;
    }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
  }
  input[data-autocompleted] {
      background-color: transparent !important;
  }
`;
