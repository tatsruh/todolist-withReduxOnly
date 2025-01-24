export type ThemeMode = 'dark' | 'light'

type InitialState = typeof initialState
const initialState = {
    themeMode: 'light' as ThemeMode,
}

export const appReducer = (
    state: InitialState = initialState,
    action: ActionsType
): InitialState => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {...state, themeMode: action.theme}
        default:
            return state
    }
}
export const changeThemeAC = (theme: ThemeMode) => {
    return {
        type: "CHANGE_THEME",
        theme
    } as const
}

type changeThemeType = ReturnType<typeof changeThemeAC>

// Action types
type ActionsType = changeThemeType