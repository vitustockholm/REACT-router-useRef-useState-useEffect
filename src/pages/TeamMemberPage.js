import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TeamMemberPage = () => {
  const { id } = useParams();

  const [teamMember, setTeamMember] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setTeamMember(response.data);
        setIsLoading(false);
      });
  }, [id]);

  console.log(id);
  return (
    <main>
      <h1>Team member: </h1>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <>
          <ul>
            <li>{teamMember.name}</li>
            <li>{teamMember.email}</li>
            <li>
              {teamMember.address.street}, {teamMember.address.city}
            </li>
            <li>{teamMember.phone}</li>
          </ul>
        </>
      )}
    </main>
  );
};

export default TeamMemberPage;
