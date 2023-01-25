import "./Search.css";

function Index({ handleChange }) {
  return (
    <div className="search">
      <input
        onChange={handleChange}
        placeholder="Enter here name..."
        type="text"
      />
    </div>
  );
}

export default Index;
