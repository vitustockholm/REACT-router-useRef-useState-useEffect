import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import TeamMember from './TeamMember';

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) =>
      //response.data
      {
        setTeamMembers(response.data);
        setIsLoading(false);
      }
    );

    const button = buttonRef.current;

    return () => {
      button.removeEventListener('click', handleClick);
      console.log('Team members removed from ui');
    };
  }, []);
  //--refs

  const buttonRef = useRef();

  const handleClick = () => console.log('Hello world');

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        teamMembers.map((teamMember) => (
          <TeamMember teamMember={teamMember} key={teamMember.id} />
        ))
      )}
      <button ref={buttonRef} onClick={handleClick}>
        Greeting
      </button>
    </div>
  );
};

export default TeamMembers;
