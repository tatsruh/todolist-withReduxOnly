import {DomainTodolist} from "./todolists-reducer";

export const actionTypes = {
    SET_TODOLISTS:'SETTODOLISTS',
    FILTER_TODOLIST: 'FILTER-TODOLIST',
    REMOVE_TDL: 'RemoveTDL',
    ADD_TDL: 'ADD_TDL',
    CHANGE_STATUS_TDL: 'CHANGE_STATUS_TDL',
    CHANGE_NAME_TDL: 'CHANGE_NAME_TDL'
} as const
export const setTodolistsAC = (todolists: DomainTodolist[]) => ({
    type: actionTypes.SET_TODOLISTS,
    todolists,
} as const);

export const filterToDoListAC = (payload: { filter: string; todolistID: string }) => ({
    type: actionTypes.FILTER_TODOLIST,
    payload,
} as const);

export const removeToDoListAc = (todolistId: string) => ({
    type: actionTypes.REMOVE_TDL,
    todolistId,
} as const);

export const changeToDoListStatusAC = (payload: { entityStatus: string; todolistId: string }) => ({
    type: actionTypes.CHANGE_STATUS_TDL,
    payload,
} as const);

export const addTodolistAC = (todolist: DomainTodolist) => ({
    type: actionTypes.ADD_TDL,
    payload: { todolist },
} as const);

export const changeNameToDoListAC = (payload: { title: string; todolistId: string }) => ({
    type: actionTypes.CHANGE_NAME_TDL,
    payload,
} as const);
