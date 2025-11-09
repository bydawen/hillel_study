import React from 'react';
import ListItem from '../ListItem/ListItem';

import './styles.scss';

export default function List({ jakes, onVote }) {
  return (
    <>
    <h2>
      Choose your favorite Jake !
    </h2>
    <ul className="list">
      {jakes.map((jake) => (
        <li key={jake.id}>
          <ListItem jake={jake} onVote={onVote} />
        </li>
      ))}
    </ul>
    </>
  );
}
