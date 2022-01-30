import AddUser from './components/users/AddUser';
import './App.css';
import UsersList from './components/users/UsersList';
import { useState } from 'react';

function App() {
  const [usersList, SetUsersList]=useState([]);

  const addUserHandler=(username, userage, id) => {
    SetUsersList(prevUsersList => {
      return [...prevUsersList, { name: username, age: userage, id: Math.random().toString() }]
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length>=1&&<UsersList users={usersList} />}
    </div>
  );
}

export default App;
