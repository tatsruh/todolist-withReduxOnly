import {DomainTask} from "../features/api/TasksTypes";
import {TaskStatus} from "../common/enum/enums";

export const deleteTaskAC = (payload: { taskId: string; todoListId: string }) => ({
    type: "DeleteTask",
    payload
}) as const;


export const addTaskAC = (payload: { task: DomainTask }) => ({
    type: "AddTask",
    payload
}) as const;

export const changeTaskAC = (payload: {
    taskId: string;
    todoListId: string,
    status: TaskStatus,
    title: string
}) => ({
    type: "ChangeTask",
    payload
}) as const;

export const setTasksAC = (payload: { todolistId: string, tasks: DomainTask[] }) => {
    return {
        type: "SetTasks",
        payload
    } as const
}