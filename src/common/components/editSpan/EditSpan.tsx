import React, {ChangeEvent, useEffect} from 'react';

type EditSpanProps = {
    title: string;
    onChange: (title: string) => void;
};

export const EditSpan = (props: EditSpanProps) => {
    const [editMode, setEditMode] = React.useState<boolean>(false);
    const [title, setTitle] = React.useState(props.title);

    // Синхронизация состояния, если props.title изменился извне
    useEffect(() => {
        setTitle(props.title);
    }, [props.title]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.onChange(title); // Сохраняем финальное значение
    };

    const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };

    return (
        editMode ? (
            <input
                onChange={changeTitleHandler}
                onBlur={deactivateEditMode}
                value={title}
                type="text"
                autoFocus
            />
        ) : (
            <span onClick={activateEditMode}>{title}</span>
        )
    );
};
