import React, {ChangeEvent} from "react";
import {Checkbox, IconButton, ListItem} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import {useAppDispatch} from "../../../../../../app/hooks/hooks";
import {TaskStatus} from "../../../../../../common/enum/enums";
import {EditSpan} from "../../../../../../common/components/editSpan/EditSpan";
import {DomainTask} from "../../../../../api/TasksTypes";
import {DomainTodolist} from "../../../../../../state/todolists-reducer";
import {changeTaskAC, deleteTaskAC} from "../../../../../../state/tasks-actions";


type TaskProps = {
    task: DomainTask;
    todolist: DomainTodolist;
};

export const Task: React.FC<TaskProps> = ({task, todolist}) => {
    const dispatch = useAppDispatch();

    const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatus = e.currentTarget.checked ? TaskStatus.Completed : TaskStatus.New;
        dispatch(changeTaskAC({
            taskId: task.id,
            todoListId: todolist.id,
            status: newStatus,
            title: task.title
        }))
    };

    const handleNameChange = (title: string) => {
        // dispatch(changeTaskTC({task, status: task.status, title}));
    };

    const handleTaskRemoval = () => {
        dispatch(deleteTaskAC({
            taskId: task.id,
            todoListId: todolist.id
        }))
    };

    return (
        <ListItem style={{opacity: task.status === TaskStatus.Completed ? 0.5 : 1}}>
            <Checkbox
                checked={task.status === TaskStatus.Completed}
                onChange={handleStatusChange}
                color="secondary"
            />
            <EditSpan title={task.title} onChange={handleNameChange}/>
            <IconButton onClick={handleTaskRemoval}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    );
};

export default Task;
