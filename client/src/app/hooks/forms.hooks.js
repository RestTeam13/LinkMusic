import {useState} from "react";

function useInput(initialValue, className, error) {
    const [value, setValue] = useState(initialValue)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    if (error) className += ' form-page__input_error'

    return {onChange, value, className}
}

export {useInput}