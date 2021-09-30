import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../components/User';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) =>
      //response.data
      {
        setUsers(response.data);
        setIsLoading(false);
      }
    );
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => <User user={user} key={user.id} />)
      )}
    </div>
  );
};

export default Users;
