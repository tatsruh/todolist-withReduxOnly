import React from 'react';
import {Grid2} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../../../app/hooks/hooks";
import {TodolistTitle} from "./todolisttitle/ToDoListTitle";
import {Input} from "../../../../../common/components/inputs/AddItemInput";
import {Tasks} from "../tasks/Tasks";
import TasksButton from "../tasks/taskbutton/TaskButton";
import {DomainTodolist} from "../../../../../state/todolists-reducer";
import {DomainTask} from "../../../../api/TasksTypes";
import {v1} from "uuid";
import {selectToDoLists} from "../../../../../state/appselector";
import {TaskPriority, TaskStatus} from "../../../../../common/enum/enums";
import {addTaskAC} from "../../../../../state/tasks-actions";

type ToDoListProps = {
    todolist: DomainTodolist
    tasks: DomainTask[];

}


export const ToDoList = (props: ToDoListProps) => {
    const todolists = useAppSelector(selectToDoLists)
    const dispatch = useAppDispatch();


    const addTask = (title: string) => {
        const newTask: DomainTask = {
            title,
            todoListId: props.todolist.id,
            id: v1(),
            order: props.tasks.length,
            status: TaskStatus.New,
            priority: TaskPriority.Low,

        }
        dispatch(addTaskAC({task: newTask}))
    }

    return (
        <Grid2 container direction={"column"} height={"100%"} justifyContent={"START"} alignItems={"center"} padding={"25px"}>
            <TodolistTitle todolist={props.todolist}/>
            <Input addtask={addTask}></Input>
            <Grid2 container width={"100%"}>
                <Tasks  tasks={props.tasks} todolist={props.todolist}/>
            </Grid2>

            <TasksButton todolist={props.todolist} ></TasksButton>

        </Grid2>
    );
};
