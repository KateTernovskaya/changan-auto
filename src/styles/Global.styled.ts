import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 14px;
    line-height: 160%;
    color: ${theme.colors.font};
  }

  ul {
    list-style: none;
  }

  a, a:visited {
    text-decoration: none;
    cursor: pointer;
    color: ${theme.colors.font};
    padding: 5px;
  }

  //button {
  //  background-color: transparent;
  //  border: none;
  //  cursor: pointer;
  //}

  // section {
  //   padding: 92px 0;
  //
  //   @media  {
  //     padding: 60px 0;
  //   }
  // }
  //
  // .accent {
  //   color: ;
  // }
`