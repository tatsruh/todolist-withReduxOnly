import {RootState} from "../app/store/store";

// export const selectTheme = (state: RootState)  => state.theme.themeMode
export const selectTasks = (state: RootState) => state.tasks;
export const selectToDoLists = (state: RootState) => state.todolists
// export const selectStatus = (state: RootState) => state.theme.status
// export const selectError = (state: RootState) => state.theme.error
