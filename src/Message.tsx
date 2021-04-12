import React from 'react';

// use an interface to define types of props
interface UserMessage {
    message: string,
    name: string
};

// return type is any for html
const Message = (props: UserMessage): any => {
    return (
        <p>{props.name}, {props.message}</p>
    );
}

export default Message;