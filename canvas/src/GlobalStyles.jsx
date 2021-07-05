import React from "react";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    body{
        padding: 0;
        margin: 0;
        font-size: 1rem; // 16px
        font-family: 'Noto Sans KR', sans-serif;
        width: 100vw;
        height: 100vh;
        max-width: 100%;
        max-height: 100%;
    }
    
`;

export default GlobalStyles;
