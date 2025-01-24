
import React from 'react';
import {Container, Grid2} from "@mui/material";
import {useAppDispatch} from "../hooks/hooks";
import {Input} from "../../common/components/inputs/AddItemInput";
import {ToDoLists} from "../../features/todolists/ui/todolist/ToDoLists";

export const Main = () => {

    const dispatch = useAppDispatch();

    const addToDoList = (title: string) => {
        // dispatch(addToDoListTC(title))
    }
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

