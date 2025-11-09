import React from 'react';

import './styles.scss';

export default function ListItem({ jake, onVote }) {
  return (
    <>
      <div className="list-item" onClick={() => onVote(jake.id)}>
        <img src={jake.image} alt={jake.id} />
      </div>
      <span className="votes">{jake.votes}</span>
    </>
  );
}
