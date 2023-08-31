import "./App.css";
import { useThemeApp } from "./context/themeContext";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "./styles/utils";
import { themeDark, themeLight } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import ButtonStyle from "./components/buttonStyle/ButtonStyle";
import { H1C } from "./components/H1Custom";
import FlexContainer from "./components/FlexContainer";

function App() {
  const { theme, toggleTheme } = useThemeApp();
  return (
    <>
      <ThemeProvider
        theme={createTheme(theme === "dark" ? themeDark : themeLight)}
      >
        <GlobalStyles />
        <ButtonStyle variant="small">
          <div onClick={toggleTheme}>Cambiar tema</div>
        </ButtonStyle>
        <FlexContainer flexDir="column" gap="10" width="100%">
          <H1C text="Esto es un H1 Custom" width="largo" />
          <H1C text="Esto es otro H1 Custom" width="pequeño" />
        </FlexContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
