import React from 'react';

export const MyButton = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
};
