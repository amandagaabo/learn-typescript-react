import React from 'react';

// return type any for html
type Props = {
    message: string,
    messageTwo: string
};

const Message = (props: Props): any => {
    return (
        <>
            <p>{props.message}</p>
            <p>{props.messageTwo}</p>
        </>
    );
}

export default Message;