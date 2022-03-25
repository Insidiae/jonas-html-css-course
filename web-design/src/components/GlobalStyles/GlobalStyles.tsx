import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
// Self-host an optimized font
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300 900;
  font-display: fallback;
  src: url(/fonts/Inter-variable-optimized.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
    U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
    U+2212, U+2215, U+FEFF, U+FFFD;
}

/*
SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ------------------------ */
/* GENERAL STYLES */
/* ------------------------ */
body {
  font-family: Inter, sans-serif;
}
`;

export default GlobalStyles;
