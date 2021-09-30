import React from 'react';

const TeamMember = ({ teamMember }) => {
  console.log(teamMember);
  return (
    <ul>
      <li>{teamMember.name}</li>
      <li>
          <Link to={`/about/${teamMember`}>More about user</Link>
      </li>
    </ul>
  );
};

export default TeamMember;
