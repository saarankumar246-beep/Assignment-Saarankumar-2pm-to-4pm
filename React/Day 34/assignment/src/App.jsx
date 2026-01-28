import { useState } from 'react'
import "./App.css";
import Todo from './components/Todo'
import Product from './components/Product';
import UserList from './components/UserList';
import ToggleUser from './components/ToggleUser';

function App() {

  return (
    <>
      <Todo /> <br />

      <Product /> <br />

      <UserList /> <br />

      <ToggleUser />
    </>
  )
}

export default App
