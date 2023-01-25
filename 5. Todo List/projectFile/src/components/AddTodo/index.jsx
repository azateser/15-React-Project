import React from "react";

import "./AddTodo.css";

function Index({ darkMode, toggleDarkMode, addTodo }) {
  return (
    <React.Fragment>
      <div className="add-todo-area">
        <div className="title">TODO</div>
        <div onClick={toggleDarkMode} className="cursor-pointer">
          <img
            src={`./images/${darkMode ? "icon-sun.svg" : "icon-moon.svg"}`}
            alt={darkMode ? "sun" : "moon"}
          />
        </div>
      </div>

      <div className="add-todo">
        <div className="circle"></div>
        <div className="px-6 w-full">
          <input
            onKeyDown={addTodo}
            className="input"
            type="text"
            placeholder="Create a new todo..."
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
