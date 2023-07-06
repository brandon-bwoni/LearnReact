import { useState } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const nameIsValid = value => value.trim() !== '';
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const {
    input: firstName,
    hasError: nameHasError,
    isValid: enteredNameIsValid,
    inputChangeHandler: nameChangeHandler, inputBlurHandler: nameBlurHandler,
    reset: resetFirstName
  } = useInput(nameIsValid);

  const {
    input: lastName,
    hasError: lastNameHasError,
    isValid: enteredLastNameIsValid,
    inputChangeHandler: lastNameChangeHandler, inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(nameIsValid);

  const {
    input: email,
    hasError: emailHasError,
    isValid: enteredEmailIsValid,
    inputChangeHandler: emailChangeHandler, inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(validateEmail);



  let formIsValid;
  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(firstName, lastName, email);

    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const nameInputClasses = nameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';


  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={firstName}
          />
          {nameHasError && <p className="error-text">First name can not be empty</p>}
        </div>
        <div className={nameInputClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
        </div>
        {lastNameHasError && <p className="error-text">Last name can not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError && <p className="error-text">Please enter a valid email address</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
