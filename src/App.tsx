import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <main className="content">
              <Topbar />
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
