import * as React from "react";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blueGrey } from '@mui/material/colors';
import ContactoValido from './components/Contacto/ContactoValido';
import ColorModeContext from './components/Theme/ColorMode';
import HacercaDeMi from './components/HacercaDeMi/HacercaDeMi'
import Hero from "./components/Hero/Hero";

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' ? {
            color: {
              azul: blueGrey[50],
            },
          }: 
          {
            color: {
              azul: blueGrey[900],
            }
          }
           ),
        },
      }),
    [mode]
  );

  return (
    <>
     <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Hero />
            {/* <Portafolio /> */}
            {/* <Skills /> */}
            <HacercaDeMi />
            <ContactoValido />
            {/* <PieDePagina /> */}
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
