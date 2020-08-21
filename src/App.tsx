import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import Theme from "./definitions/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
