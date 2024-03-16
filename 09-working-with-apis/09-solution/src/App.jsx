import './App.css';
import { useState, useEffect } from 'react';

function UserCard({user}) {
  return (
  <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img src={user.avatar} />
            <p>{user.first_name} {user.last_name}</p>
          </div>
          <div className='flip-card-back'>
            <p>{user.first_name} {user.last_name}</p>
            <p>{user.employment.title}</p>
            <p>{user.gender}</p>
            <p>{user.date_of_birth}</p>
            <p>{user.email}</p>
            <p>{user.phone_number}</p>
          </div>
        </div>
      </div>
  )
}

function AllCards() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then(response => response.json())
      .then(data => setUsers(data));
  });

  return (
  <>
    <div className='card-container'>
      <div className='rows'>
        {users.map(user => <UserCard user={user}/>)}
        <button className='btn'
        onClick={() => fetch('https://random-data-api.com/api/users/random_user?size=10').then(response => response.json()).then(data => setUsers(data))}>
          New Batch
          </button>
        </div>
        
    </div>
    
    </>
  )
}

function App() {

  return (
    <AllCards/>
  );
}

export default App;