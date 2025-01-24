import {List} from "@mui/material";
import React, {useEffect} from "react";
import {useAppDispatch} from "../../../../../app/hooks/hooks";
import Task from "./task/Task";
import {DomainTask} from "../../../../api/TasksTypes";
import {DomainTodolist} from "../../../../../state/todolists-reducer";


type Props = {
    todolist: DomainTodolist;
    tasks: DomainTask[];
};
export const Tasks = ({tasks, todolist}: Props) => {
    const dispatch = useAppDispatch();


    useEffect(() => {
        // dispatch(fetchAllTasksTC(todolist.id))
    }, [])

    return (
        <>
            {tasks?.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <List>
                    {tasks?.map(task => {
                        return <Task task={task} todolist={todolist}/>
                    })}
                </List>
            )}
        </>

    )
};
