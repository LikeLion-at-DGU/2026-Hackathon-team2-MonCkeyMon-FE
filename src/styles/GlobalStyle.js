import { createGlobalStyle } from "styled-components";
import BatangRegular from "../assets/fonts/Batang_Regular.woff";
import BatangBold from "../assets/fonts/Batang_Bold.woff";
import AbhayaLibre from "../assets/fonts/AbhayaLibre-ExtraBold.ttf";
import AbhayaLibreRegular from "../assets/fonts/AbhayaLibre-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "GyeonggiBatang";
    src: url(${BatangRegular}) format("woff");
    font-weight: 400;
    font-display: swap;
    }

    @font-face {
    font-family: "GyeonggiBatang";
    src: url(${BatangBold}) format("woff");
    font-weight: 700;
    font-display: swap;
    }

    @font-face {
        font-family: "Abhaya Libre";
        src: url(${AbhayaLibre}) format("truetype");
        font-weight: 800;
        font-display: swap;
    }

    @font-face {
    font-family: "Abhaya Libre";
    src: url(${AbhayaLibreRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, body, #root {
    height: 100%;
    }

    body {
    font-family: "Pretendard Variable", Pretendard, sans-serif;
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    }

    button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    }

    a {
    text-decoration: none;
    color: inherit;
    }
`;