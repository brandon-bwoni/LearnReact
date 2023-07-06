import { useState } from "react";

const useInput = (validateInput) => {
  const [userInput, setUserInput] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validateInput(userInput);
  const hasError = !inputIsValid && inputIsTouched;

  function inputChangeHandler(event) {
    setUserInput(event.target.value);
  }

  function inputBlurHandler() {
    setInputIsTouched(true);
  }

  const reset = () => {
    setUserInput("");
    setInputIsTouched(false);
  };


  return {
    input: userInput,
    isValid: inputIsValid,
    hasError,
    userInput,
    inputBlurHandler,
    inputChangeHandler,
    reset,
  };
};

export default useInput;