import React, { useState } from 'react';

function useInput(initialVallue) {
    const [value, setValue] = useState(initialVallue);
    const reset = () => {
        setValue(initialVallue);
    }
    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value);
        }
    }

    return [value, bind, reset]
}

export default useInput;