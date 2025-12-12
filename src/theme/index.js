import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { baseThemeOptions } from "./base-theme-options";
import { darkThemeOptions } from "./dark-theme-options";
import { lightThemeOptions } from "./light-theme-options";
export const createTheme = (config = {}) => {
  // Provide defaults to prevent SSG errors
  const mode = config?.mode || 'light';
  const direction = config?.direction || 'ltr';
  
  let theme = createMuiTheme(
    baseThemeOptions,
    mode === "light" ? lightThemeOptions : darkThemeOptions,
    {
      direction: direction,
    }
  );

  if (config?.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
