import React, { useEffect, useState } from 'react';

import Head from './components/Head';
import List from './components/List';
import Search from './components/Search';
import data from './emojiList';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  const [emojiList, setEmojiList] = useState(data);

  return (
    <div className="main">
      <Head />
      <Search data={data} emojiList={emojiList} setEmojiList={setEmojiList} />
      <button className="change-theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <div className="icon">{theme === 'light' ? <img className="h-4 w-4" src="./images/light.svg" alt="" /> : <img className="h-4 w-4" src="./images/dark.svg" alt="" />} Theme</div>
      </button>
      <List emojiList={emojiList} />
    </div>
  );
}

export default App;
