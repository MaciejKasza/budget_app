import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }

    :root{
        --color-gray: rgba(252, 246, 249, 0.78);

        --color-white: #FAF6F9;
        --color-blue:#251A5F;
        --color-light: #57536d;
        --color-green: #42AD00;
        --color-red: #FF0000;
    }

    a{
      text-decoration: none;
    }

    input{
      border: none;
      outline: none;
      background: none;
    }

    body {
      background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
      
    }
`;

export default GlobalStyle;
