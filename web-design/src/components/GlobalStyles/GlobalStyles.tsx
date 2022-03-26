import { createGlobalStyle } from "styled-components/macro";

import { COLORS } from "../../constants";

const GlobalStyles = createGlobalStyle`
/* Self-host an optimized font */
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
html {
  --color-primary-100: ${COLORS.primary[100]};
  --color-primary-200: ${COLORS.primary[200]};
  --color-primary-300: ${COLORS.primary[300]};
  --color-primary-400: ${COLORS.primary[400]};
  --color-primary-500: ${COLORS.primary[500]};
  --color-primary-600: ${COLORS.primary[600]};
  --color-primary-700: ${COLORS.primary[700]};
  --color-primary-800: ${COLORS.primary[800]};
  --color-primary-900: ${COLORS.primary[900]};
  --color-primary-1000: ${COLORS.primary[1000]};
  --color-text: ${COLORS.text};
  --color-text-light: ${COLORS.textLight};
  --color-white: ${COLORS.white};
}

body {
  font-family: Inter, sans-serif;
  color: var(--color-text);
  border-bottom: 8px solid var(--color-primary-1000);
}
`;

export default GlobalStyles;
