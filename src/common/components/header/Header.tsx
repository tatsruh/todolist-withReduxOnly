
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

import Toolbar from "@mui/material/Toolbar";
import React from "react";
import {LinearProgress, Switch} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../app/hooks/hooks";
import {MenuButton} from "../buttons/MenuButton";
import {changeThemeAC} from "../../../state/theme-reducer";
import {selectTheme} from "../../../state/appselector";

export const Header = () => {
    // const themeMode = useAppSelector(selectTheme)
    // const status = useAppSelector(selectStatus)

    const dispatch = useAppDispatch()
    const themeMode = useAppSelector(selectTheme)


    const changeModeHandler = () => {
        dispatch(changeThemeAC(themeMode === 'light' ? 'dark' : 'light'))
    }

    return (
        <AppBar position="static" sx={{ mb: '30px' }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <MenuButton>Log In</MenuButton>
                <MenuButton color="inherit">Log Out</MenuButton>
                <MenuButton color="inherit">FAQ</MenuButton>
                <Switch color={"default"} onClick={changeModeHandler} />
            </Toolbar>
            {/*{status === 'loading' &&  <LinearProgress /> }*/}
        </AppBar>
    )
}