import React, {useState} from "react";

const Input = () => {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input id = "text" onChange={onChange} />
            TEXT: {text}
        </div>
    );
};

export default Input;