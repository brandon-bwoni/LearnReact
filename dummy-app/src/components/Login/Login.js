import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: action.value.includes('@') };
  }

  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_PASSWORD') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'PASSWORD_BLUR') {
    return { value: state.value, isValid: action.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};



const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  // Email reducer
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // Password reducer
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    password: '',
    isValid: null,
  });

  useEffect(() => {
    console.log('EFFECT RUNNING');
  });

  // });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;


  // Handling login side effects
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_PASSWORD', val: event.target.value });

    // setFormIsValid(
    //   emailState.isValid && passwordState.trim().length > 6
    // );
  };

  // Email validation handler
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  // Password validation handler 
  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_BLUR' });
  };

  // Form submission handler
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.activate();
    } else {
      passwordInputRef.current.activate();
    }
  };


  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <input
          ref={emailInputRef}
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login


