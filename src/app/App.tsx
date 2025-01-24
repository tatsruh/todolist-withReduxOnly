import React from 'react';
import './App.css';
import {MenuButton} from "../common/components/buttons/MenuButton";
import {Input} from "../common/components/inputs/AddItemInput";
import {Header} from "../common/components/header/Header";
import {EditSpan} from "../common/components/editSpan/EditSpan";
import {CssBaseline} from "@mui/material";
import {Main} from "./main/Main";

function App() {
  return (
      <div>
          {/*<ThemeProvider theme={getTheme(themeMode)}>*/}
              <CssBaseline/>
              <Header/>
              {/*<ErrorSnackbar/>*/}
              <Main/>
          {/*</ThemeProvider>*/}
      </div>
  );
}

export default App;
