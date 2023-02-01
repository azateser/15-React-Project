import "./Search.css"

function Search({ setEmojiList, data }) {
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const newEmojiList = data.filter((emoji) => {
      return emoji.keywords.toLowerCase().includes(searchValue.toLowerCase());
    });
    setEmojiList(newEmojiList);
  };

  return (
    <div className="search">
      <div className="icon">
        <img src="./images/search.svg" alt="" />
      </div>
      <div>
        <input onChange={handleSearch} placeholder="Search an emoji..." type="text" />
      </div>
    </div>
  );
}

export default Search;
