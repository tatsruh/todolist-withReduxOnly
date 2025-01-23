import React from 'react';

type FilterButtonProps = {
    name: string;
    onClick: () => void;
    disabled?: boolean;
}
export const OnClickHandler = (onClick: () => void) => {
    onClick();
}
export const FilterButton = (props: FilterButtonProps) => {
    return (
        <button disabled={props.disabled}  onClick={() => OnClickHandler(props.onClick)}>{props.name}</button>

    );
};

