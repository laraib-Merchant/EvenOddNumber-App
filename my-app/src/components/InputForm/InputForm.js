import React, {useState} from "react";
import '../../style.css';
const InputForm = ({onInput, onReset}) => {
    const [inputValue, setInputValue] = useState("");
    let result = "";
    const onSubmitHandler = (event) => {
        event.preventDefault();
        result = validateInput(inputValue);
        onInput(result);
    }

    const onInputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    const validateInput = (number) => {
        if(number === '' || number < 0 || isNaN(number)) {
            result = "Please Enter Valid Number";
        } else {
            result = checkInput(+number);
        }
        return result;
    }

    const checkInput = (number) => {
        if(number % 2 === 0) {
            result = "The Number Is Even";
        } else {
            result = "The Number Is Odd";
        }
        return result;
    }

    const resetHandler = () => {
        result = "Please Enter Any Number";
        setInputValue("");
        onReset(result);
    }
    return (
        <div className="input-form">
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input className="input-field" type="text" id="my-input" value={inputValue} onChange={onInputChangeHandler}/>
                </div>
                <div className="button-group">
                    <button type="submit" className="submit-button">Check</button>
                    <button type="button" onClick={resetHandler} className="reset-button">Reset</button>
                </div>
            </form>
        </div>
    )

}

export default InputForm;