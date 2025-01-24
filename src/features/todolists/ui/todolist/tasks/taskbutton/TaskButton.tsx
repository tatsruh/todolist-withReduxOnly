import React from 'react';
import {Button, Grid2} from "@mui/material";
import {useAppDispatch} from "../../../../../../app/hooks/hooks";
import {DomainTodolist} from "../../../../../../state/todolists-reducer";
import {filterToDoListAC} from "../../../../../../state/todolist-actions";

type Props = {
    todolist: DomainTodolist
}

const TasksButton = (props: Props) => {
    const dispatch = useAppDispatch();


    const filterButton = (filter: string, todolistID: string) => {
        dispatch(filterToDoListAC({todolistID, filter}));
    };


    return (
        <Grid2 container direction={"row"} gap={"5px"}>
            <Button onClick={() => filterButton("all", props.todolist.id)}
                    color={props.todolist.filter === "all" ? "secondary" : "primary"} name={"ALL"} size={"small"}
                    variant={props.todolist.filter === "all" ? "contained" : "outlined"}>All</Button>
            <Button onClick={() => filterButton("done", props.todolist.id)}
                    color={props.todolist.filter === "done" ? "secondary" : "primary"}  name={"DONE"} size={"small"}
                    variant={props.todolist.filter === "done" ? "contained" : "outlined"}>Done</Button>
            <Button onClick={() => filterButton('notyet', props.todolist.id)}
                    color={props.todolist.filter === "notyet" ? "secondary" : "primary"}
                    name={"NOT YET"} size={"small"} variant={props.todolist.filter === "notyet"
                ? "contained" : "outlined"}>Not Yet</Button>

        </Grid2>
    );
};

export default TasksButton;