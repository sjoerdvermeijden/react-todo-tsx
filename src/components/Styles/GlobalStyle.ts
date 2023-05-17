import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --lightgray: #f5f5f5;
        --darkgray: #333;
        --green: #81e081;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: Verdana, Geneva, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        line-height: 17px;
    }

    body {

    }
  
`;
