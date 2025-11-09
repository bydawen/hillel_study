import React from 'react';

import './styles.scss';

export default function Winner({ winner }) {
  return (
    <div className="winner">
      <h3>
        Here's winner !!!
        <br/>
        <span>
          Total votes: <b>{winner.votes}</b>
        </span>
      </h3>
      <div className="winner-image">
        <img src={winner.image} alt={`Jake ${winner.id}`} />
      </div>
    </div>
  );
}
