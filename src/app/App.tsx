import React from 'react';
import './App.css';

import {Header} from "../common/components/header/Header";
import {EditSpan} from "../common/components/editSpan/EditSpan";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Main} from "./main/Main";
import {getTheme} from "../common/components/theme/theme";
import {useSelector} from "react-redux";
import {selectTheme} from "../state/appselector";

function App() {
    const themeMode = useSelector(selectTheme);

    return (
      <div>
          <ThemeProvider theme={getTheme(themeMode)}>
              <CssBaseline/>
              <Header/>
              {/*<ErrorSnackbar/>*/}
              <Main/>
          </ThemeProvider>
      </div>
  );
}

export default App;
