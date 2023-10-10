import React, { useState } from "react";

const Counter = () => {
    const [total, setTotal] = useState(0);

    const increase = () => {
        setTotal(total + 1)
    }

    const decrease = () => {
        setTotal(total - 1)
    }

    return (
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            total: {total}
        </div>
    )
}
export default Counter;