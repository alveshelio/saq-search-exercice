import * as React from "react";
import { Fragment } from "react";
import { ThemeProvider } from "emotion-theming";

import "./globalStyles";

const theme = {
  primary: "#39465D",
  reversedPrimary: "#fff",
  secondary: "#0066cc",
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
    <Fragment>{children}</Fragment>
  </ThemeProvider>
);

export default MainTemplate;
