import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { themeLight } from "./themes";

const theme = themeLight;

// @ts-ignore
export const ThemeContext = React.createContext();

const ThemeProviderWrapper = (props) => {
  const [currentTheme, setCurrentTheme] = React.useState(theme);

  const setTheme = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
