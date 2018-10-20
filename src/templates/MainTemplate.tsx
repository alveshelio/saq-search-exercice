import * as React from "react";
import { Fragment } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  primaryColor: "#39465D",
  secondaryColor: "#0066cc",
  bgColor: "#5DAAED",
  tags: {
    yellow: "#f9dc1b",
    black: "#333",
    red: "#b00",
    green: "#0a6",
  },
};

interface Props {
  children: React.ReactNode;
}

const MainTemplate: React.SFC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  </ThemeProvider>
);

export default MainTemplate;
