import {DomainTask} from "../features/api/TasksTypes";
import {addTaskAC, changeTaskAC, deleteTaskAC, setTasksAC} from "./tasks-actions";
import {addToDoListType, removeActionType} from "./todolists-reducer";
import {TaskPriority, TaskStatus} from "../common/enum/enums";
import {v1} from "uuid";

export type tasksType = {
    [key: string]: DomainTask[]
}
export type actionTasksType = deleteTaskActionType | addTaskActionType    | removeActionType
    | addToDoListType | setTasksActionType | changeTaskType;
export const todolistID1 = v1()
export const  todolistID2 = v1()

const initState: tasksType = {
 [todolistID1]: [{id: v1(), title: 'dcde', status: TaskStatus.Completed, todoListId: todolistID1, priority: TaskPriority.Low, order: 1}]
}

export const tasksReducer = (state: tasksType = initState, action: actionTasksType): tasksType => {
    switch (action.type) {
        case 'SetTasks': {
            const stateCopy = {...state}
            stateCopy[action.payload.todolistId] = action.payload.tasks
            return stateCopy
        }
        case "DeleteTask": {
            const tasksRemove = state[action.payload.todoListId].filter(
                (task: DomainTask) => task.id !== action.payload.taskId
            );
            return {
                ...state,
                [action.payload.todoListId]: tasksRemove
            };
        }
        case "AddTask": {
            const newTask: DomainTask = action.payload.task;
            const newTasks = [newTask, ...state[newTask.todoListId]];
            return {
                ...state,
                [newTask.todoListId]: newTasks
            };
        }
        case "ChangeTask": {
            const newTasks = state[action.payload.todoListId].map(task =>
                task.id === action.payload.taskId
                    ? {...task, status: action.payload.status, title: action.payload.title}
                    : task
            );
            return {
                ...state,
                [action.payload.todoListId]: newTasks
            };
        }
        case "ADD_TDL": {
            let newTDL = action.payload.todolist
            return {...state, [newTDL.id]: []}
        }
        case "RemoveTDL": {
            let copystate = {...state}
            delete copystate[action.todolistId]
            return copystate
        }

        default:
            return state;
    }
};

export type deleteTaskActionType = ReturnType<typeof deleteTaskAC>;
export type addTaskActionType = ReturnType<typeof addTaskAC>;
export type setTasksActionType = ReturnType<typeof setTasksAC>
export type changeTaskType = ReturnType<typeof changeTaskAC>

