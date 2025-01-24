import React from 'react';
import {Grid2} from "@mui/material";
import {useAppDispatch} from "../../../../../app/hooks/hooks";
import {TodolistTitle} from "./todolisttitle/ToDoListTitle";
import {Input} from "../../../../../common/components/inputs/AddItemInput";
import {Tasks} from "../tasks/Tasks";
import TasksButton from "../tasks/taskbutton/TaskButton";
import {DomainTodolist} from "../../../../../state/todolists-reducer";
import {DomainTask} from "../../../../api/TasksTypes";

type ToDoListProps = {
    todolist: DomainTodolist
    tasks: DomainTask[];

}

export const ToDoList = (props: ToDoListProps) => {

    const dispatch = useAppDispatch();


    const addTask = (title: string) => {
        // dispatch(addTaskTC({title, todoListId: props.todolist.id}));

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
