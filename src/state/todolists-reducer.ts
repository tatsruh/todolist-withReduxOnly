
import {
    actionTypes,
    addTodolistAC,
    changeNameToDoListAC,
    changeToDoListStatusAC, filterToDoListAC, removeToDoListAc,
    setTodolistsAC
} from "./todolist-actions";
import {ToDoListType} from "../features/api/ToDoListsTypes";

const initState: DomainTodolist[] = [];

export type ToDoListActionTypes =
    SetTodolistsActionType
    | changeStatusType
    | changeNameTDLType
    | removeActionType
    | addToDoListType
    | FilterActionType

export const todolistReducer = (
    state: DomainTodolist[] = initState,
    action: ToDoListActionTypes
): DomainTodolist[] => {
    switch (action.type) {
        case actionTypes.SET_TODOLISTS:
            return action.todolists.map(tl => ({
                ...tl,
                filter: 'all',
                entityStatus: 'idle',
            }));
        case actionTypes.CHANGE_STATUS_TDL: {
            return state.map(tl =>
                tl.id === action.payload.todolistId
                    ? { ...tl, entityStatus: action.payload.entityStatus }
                    : tl
            );
        }
        case actionTypes.FILTER_TODOLIST:
            return state.map(tl =>
                tl.id === action.payload.todolistID
                    ? { ...tl, filter: action.payload.filter }
                    : tl
            );

        case actionTypes.REMOVE_TDL:
            return state.filter(tl => tl.id !== action.todolistId);

        case actionTypes.ADD_TDL:
            const newTDL: DomainTodolist = {
                ...action.payload.todolist,
                entityStatus: 'idle',
            };
            return [...state, newTDL];

        case actionTypes.CHANGE_NAME_TDL:
            return state.map(tl =>
                tl.id === action.payload.todolistId
                    ? { ...tl, title: action.payload.title }
                    : tl
            );


        default:
            return state;
    }
};

export type DomainTodolist = ToDoListType & {
    filter: string;
    entityStatus: string;
};





export type SetTodolistsActionType = ReturnType<typeof setTodolistsAC>;
export type changeStatusType = ReturnType<typeof changeToDoListStatusAC>;
export type changeNameTDLType = ReturnType<typeof changeNameToDoListAC>
export type addToDoListType = ReturnType<typeof addTodolistAC>
export type removeActionType = ReturnType<typeof removeToDoListAc>
export type FilterActionType = ReturnType<typeof filterToDoListAC>

