import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './List.css';

function List({ emojiList }) {
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="emoji-list">
        {emojiList.map((emoji) => (
          <div
            onClick={() => {
              navigator.clipboard.writeText(emoji.symbol);
              toast(`${emoji.symbol} copied to clipboard`);
            }}
            className="emoji group">
            <div className="symbol group-hover:scale-110">{emoji.symbol}</div>
            <div className="title">{`${emoji.title > 10 ? emoji.title : emoji.title.slice(0, 10) + '...'}`}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default List;
