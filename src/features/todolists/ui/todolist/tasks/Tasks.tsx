import React, {ChangeEvent} from "react";
import {Checkbox, IconButton, ListItem} from "@mui/material";
import {EditSpan} from "../../../../../../common/components/Editspan/editSpan";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    changeTaskTC,
    deleteTaskTC
} from "../../../../../../state/tasks-reducer";
import {useAppDispatch} from "../../../../../../app/hooks/hooks";
import {DomainTask} from "../../../../api/tasksApiTypes/tasks-types";
import {TaskStatus} from "../../../../../../common/enum/enum";
import {DomainTodolist} from "../../../../../../state/todolist-reducer";

type TaskProps = {
    task: DomainTask;
    todolist: DomainTodolist;
};

export const Task: React.FC<TaskProps> = ({task, todolist}) => {
    const dispatch = useAppDispatch();

    const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatus = e.currentTarget.checked ? TaskStatus.Completed : TaskStatus.New;
        dispatch(changeTaskTC({task, status: newStatus, title: task.title}));
    };

    const handleNameChange = (title: string) => {
        dispatch(changeTaskTC({task, status: task.status, title}));
    };

    const handleTaskRemoval = () => {
        dispatch(deleteTaskTC({taskId: task.id, todoListId: todolist.id}));
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
