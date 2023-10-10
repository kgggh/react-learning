import React, {useState} from "react";

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    });

    const {name, email, phoneNumber} = inputs;

    const onChange = (e) => {
        console.log(e);
        const value = e.target.value;
        const id = e.target.id; 
        
        setInputs({
            ...inputs,
            [id]: value
    });
    };

    return (
        <div>
            <div>
                <input type="text" id="name" value={name} onChange={onChange}/> 변화값: {name}
            </div>
            <div>
                <input type="email" id="email" value={email} onChange={onChange}/> 변화값: {email}
            </div>
            <div>
                <input type="tel" id="phoneNumber" value={phoneNumber} onChange={onChange}/> 변화값: {phoneNumber} 
            </div>
        </div>
    );
};

export default Input2;