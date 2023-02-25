import React, { useContext } from 'react';
import { themeLight, themeDark } from './themes';
import { ThemeContext } from './ThemeProviderWrapper';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === themeLight ? themeDark : themeLight);
  };

  return (
    <IconButton sx={{ position: "absolute", top: "1rem", left: "1rem", }} onClick={toggleTheme}>
      {theme ?
        <Brightness4Icon /> :
        <Brightness7Icon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
