import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <ul>
        <li>{user.name}</li>
        <li>
          <button>More about user</button>
        </li>
      </ul>
    </div>
  );
};

export default User;
