
import React from 'react';
import {Container, Grid2} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {Input} from "../../common/components/inputs/AddItemInput";
import {ToDoLists} from "../../features/todolists/ui/todolist/ToDoLists";
import {DomainTodolist} from "../../state/todolists-reducer";
import {v1} from "uuid";
import {addTodolistAC} from "../../state/todolist-actions";
import {selectToDoLists} from "../../state/appselector";

export const Main = () => {

    const dispatch = useAppDispatch();
    const todolists = useAppSelector(selectToDoLists)

    const addToDoList = (title: string) => {
        const newTDL: DomainTodolist = {
            title,
            id: v1(),
            order: todolists.length,
            addedDate: '00-00-00',
            filter: 'all',
            entityStatus: 'new',
        }
    dispatch(addTodolistAC(newTDL))}
    return (

        <Container>
            <Grid2 container direction="column" gap={"50px"}>
                <Grid2 container marginTop={"50px"}>
                    <Input name={"Add new to do list"} addtask={addToDoList}></Input>
                </Grid2>
                <Grid2 container direction="row"  gap={"50px"} >
                    <Grid2 container padding={"25px"}>
                        <ToDoLists/>
                    </Grid2>
                </Grid2>
            </Grid2>


        </Container>

    );
};

