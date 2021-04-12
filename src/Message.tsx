import messageHoc from "./HOC";

// return type is any for html
const example = (props: any): any => {
    return (
        <p>{props.name}, {props.message}</p>
    );
}

const Message = messageHoc(example);

export default Message;