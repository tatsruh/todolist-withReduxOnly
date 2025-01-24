import {TaskPriority, TaskStatus} from "../../common/enum/enums";


export type DomainTask = {
    title: string
    status: TaskStatus
    priority: TaskPriority
    id: string
    todoListId: string
    order: number
}

export type UpdateTaskModel = {
    status: TaskStatus
    title:string
    priority: TaskPriority
}

export type UpdateTaskDomainModel = {
    title: string
    status?: TaskStatus
    priority?: TaskPriority
}
