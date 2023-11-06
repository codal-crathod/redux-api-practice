import React from 'react';
import { useSelector } from 'react-redux';

function UserInfo() {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <h1>User Info</h1>
      <ul>
        {users.map((user, index) => (
          <div key={index}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default UserInfo;
