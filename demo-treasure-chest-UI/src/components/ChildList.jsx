import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ChildList = ({ children }) => {
  const { userId } = useParams();

  const filteredChildren = children.filter(child => child.userId === parseInt(userId));

  return (
    <div>
      <h2>Select a Child</h2>
      <ul>
        {filteredChildren.map((child) => (
          <li key={child.id}>
            <Link to={`/user/${userId}/child/${child.id}/memories`}>{child.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildList;
