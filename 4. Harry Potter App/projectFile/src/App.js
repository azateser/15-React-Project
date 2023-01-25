import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./components/Card";
import Search from "./components/Search";

import "./App.css";

function App() {
  const [mainData, setMainData] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    if (!e.target.value) return setData(mainData);

    const resultsArray = mainData.filter((data) =>
      data.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(resultsArray);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://hp-api.onrender.com/api/characters`
      );
      setData(response.data);
      setMainData(response.data);
    } catch (err) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main-container">
      <div className="search-area">
        <Search handleChange={handleChange} />
      </div>
      <div className="card-area">
        {!loading &&
          data.map((data) => (
            <Card
              id={data.id}
              house={data.house}
              image={data.image}
              name={data.name}
              actor={data.actor}
              gender={data.gender}
              yearOfBirth={data.yearOfBirth}
            />
          ))}
      </div>
      {loading && (
        <div className="loading">
          <div>
            <img src="./images/loading.svg" alt="" />
          </div>
        </div>
      )}

      <div></div>
    </div>
  );
}

export default App;
