import { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


export default function AddUser(props) {
  const inputRef = useRef();
  // User inputState handler
  const [enteredDetails, setEnteredDetails] = useState({
    id: '',
    username: '',
    age: ''
  });
  // Error handling modal state manage
  const [error, setError] = useState();

  // Handling change on user inputs
  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setEnteredDetails(prevDetail => {
      return { ...prevDetail, [name]: value };
    });

  };

  // Form submission handler
  const addUserHandler = (event) => {
    event.preventDefault();

    // Input validation logic
    if ((enteredDetails.username.trim().length && enteredDetails.age.trim().length) === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (no-empty values)'
      });
      return;
    }

    if (+enteredDetails.age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (greater than zero)'
      });
      return;
    }

    // Function to handle user input date
    props.onAddUser(enteredDetails.username, enteredDetails.age);

    // Resetting the form
    setEnteredDetails({
      username: '',
      age: ''
    });

    // Resetting the error modal

  };

  const errorHandler = () => {
    setError(null);
  };


  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message}
        onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={enteredDetails.username}
            onChange={onChangeHandler}
            ref={inputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={onChangeHandler}
            value={enteredDetails.age}
            ref={inputRef}
          />
          <Button type="submit" >Add User</Button>
        </form>
      </Card>
    </div>
  );
};