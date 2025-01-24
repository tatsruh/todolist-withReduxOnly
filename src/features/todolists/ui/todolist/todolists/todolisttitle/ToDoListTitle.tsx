import {IconButton} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";

import {useAppDispatch} from "../../../../../../app/hooks/hooks";
import {EditSpan} from "../../../../../../common/components/editSpan/EditSpan";
import {DomainTodolist} from "../../../../../../state/todolists-reducer";
import {removeToDoListAc} from "../../../../../../state/todolist-actions";

type Props = {
    todolist: DomainTodolist;
};

export const TodolistTitle = ({todolist}: Props) => {
    const {title, id, entityStatus} = todolist;

    const dispatch = useAppDispatch();

    const removeTodolistHandler = () => {
        dispatch(removeToDoListAc(id))
    };

    const updateTodolistHandler = (title: string) => {
        // dispatch(changeTitleToDoListTC({title, todolistId: id})); // Обновление названия
    };

    return (
        <div className="todolist-title-container">
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <h3>
                    <EditSpan title={title} onChange={updateTodolistHandler}/>
                </h3>
                <IconButton onClick={removeTodolistHandler} disabled={entityStatus === 'loading'}>
                    <CancelIcon/>
                </IconButton></div>

        </div>
    );
};
