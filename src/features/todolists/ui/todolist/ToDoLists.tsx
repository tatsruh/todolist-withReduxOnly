import {Paper} from "@mui/material";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks/hooks";
import {TaskStatus} from "../../../../common/enum/enums";
import {ToDoList} from "./todolists/ToDoList";
import {tasksType} from "../../../../state/tasks-reducer";
import {selectTasks, selectToDoLists} from "../../../../state/appselector";
import {DomainTodolist} from "../../../../state/todolists-reducer";
import {setTodolistsAC} from "../../../../state/todolist-actions";
import {setTasksAC} from "../../../../state/tasks-actions";
import {DomainTask} from "../../../api/TasksTypes";

export const ToDoLists = () => {
    const tasks: tasksType = useAppSelector(selectTasks);
    const todolists: DomainTodolist[] = useAppSelector(selectToDoLists);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(setTodolistsAC(todolists))
    }, [])



    const getFilteredTasks = (tasks: tasksType[string], filter: string) => {
        switch (filter) {
            case "done":
                return tasks.filter(t => t.status === TaskStatus.Completed);
            case "notyet":
                return tasks.filter(t => t.status === TaskStatus.New);
            default:
                return tasks;
        }

    };

    return (
        <>
            {todolists.map(tl => {
                const filteredTasks = getFilteredTasks(tasks[tl.id], tl.filter);
                return (
                    <Paper key={tl.id}>
                        <ToDoList
                            todolist={tl}
                            tasks={filteredTasks}
                        />
                    </Paper>
                );
            })}
        </>
    );
};
