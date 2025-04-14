//server component
import React from 'react'
//for fetch we pass url endpoint
//aka link from jsonplaceholder

//fetch returns a promise so we have to use await
//to use await we need to add asynchronous operation to the function definition

//

interface User {
  id: number;
  name:string;
}
const UsersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
  const users: User[] = await res.json();

  return (
    <>
    <h1 className='text-black underline'>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <ul className='text-black'>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
    
    </>
  )
}

export default UsersPage


