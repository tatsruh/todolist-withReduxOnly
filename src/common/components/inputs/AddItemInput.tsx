import {useEffect, useState} from "react";
import {IconButton, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';



type InputProps = {
    addtask: (title: string) => void;
    name?: string;
}
// eslint-disable-next-line react-hooks/rules-of-hooks



export const Input = (props: InputProps) => {
    const [inputTitle, setInputTitle] = useState<string>('');
    const AddTaskHandler = () => {
        if (inputTitle.trim() !== "")
        {props.addtask(inputTitle.trim());
            setInputTitle('');}
    }
    const onKeyDownAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && maxLength) {
            AddTaskHandler();
        }
    }
    let [error, setError] = useState<string | null>(null);

    const maxLength = inputTitle.length <30;
    const minLength = inputTitle.length === 0;
    useEffect(() => {
        if (!maxLength || minLength) {
            setError('error');
        } else {
            setError(null);
        }
    }, [inputTitle, maxLength]);
    return (
        <div>
            <TextField
                error={!!error}
                id="outlined-error"
                label={props.name || "Paste your task"}
                defaultValue="Hello World"
                onKeyDown={onKeyDownAddTask} type="text" value={inputTitle}
                onChange={e => setInputTitle(e.currentTarget.value)}
                helperText={!maxLength ? "Task is too long" : minLength ? "Task is empty" : null}

            />

            <IconButton  onClick={AddTaskHandler} >
                <AddIcon />
            </IconButton>
        </div>
    );
};
