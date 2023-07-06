import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import Wrapper from './components/Helpers/Wrapper';


function App() {
  const [usersList, setUsersList] = useState([]);

  // Handling the rendering of a user
  const addUserHandler = (userName, userAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, { name: userName, age: userAge, id: Math.random().toString() }];
    });
  };

  // console.log(usersList);

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
