import { useState } from 'react';

import './styles.scss';

export default function TextBlock() {
  const [text, changeText] = useState('');

  function clearInput() {
    changeText('');
  }
  console.log(text);

  return (
    <div className="TextBlock">
      <div>
        <input id="userText" type="text" value={text} onChange={e => changeText(e.target.value)} placeholder="Enter some text here" />
        {text &&
          <button type="button" onClick={clearInput}>
            Clear input
          </button>
        }
      </div>

      {text &&
        <p className="TextBlock-view">
          What was in the input?
          <span>
            {text}
          </span>
        </p>
      }
    </div>
  )
}
