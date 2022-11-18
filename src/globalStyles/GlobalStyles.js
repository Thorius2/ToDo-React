import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        background-color: #191919;
        font-family: 'Poppins', sans-serif;
        -webkit-tap-highlight-color: transparent;
        color: white;
    }
`;

export default GlobalStyles;