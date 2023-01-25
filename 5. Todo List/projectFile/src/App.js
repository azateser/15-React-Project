import React, { useEffect, useState } from "react";

import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

import "./App.css";

const data = [
  {
    id: 1,
    status: "active",
    text: "Hello World.",
  },
  {
    id: 2,
    status: "completed",
    text: "Example Word To Do.",
  },
  {
    id: 3,
    status: "active",
    text: "Enter a todo and press 'enter'.",
  },
];

function App() {
  const [mainData, setMainData] = useState(data);

  const [todos, setTodos] = useState(mainData);

  const addTodo = (e) => {
    if (e.key === "Enter") {
      const newTodo = {
        id: todos.length + 1,
        status: "active",
        text: e.target.value,
      };
      setTodos([...todos, newTodo]);
      setMainData([...mainData, newTodo]);
      e.target.value = "";
    }
  };

  const changeStatus = (e) => {
    const id = e.target.id;
    const newTodos = todos.map((todo) => {
      if (todo.id === parseInt(id)) {
        if (todo.status === "active") {
          todo.status = "completed";
        } else {
          todo.status = "active";
        }
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const allTab = () => {
    setTodos(mainData);
    setTab("all");
  };

  const activeTab = () => {
    const newTodos = mainData.filter((todo) => todo.status === "active");
    setTodos(newTodos);
    setTab("active");
  };

  const completedTab = () => {
    const newTodos = mainData.filter((todo) => todo.status === "completed");
    setTodos(newTodos);
    setTab("completed");
  };

  const [tab, setTab] = useState("all");

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    }
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const clearCompleted = () => {
    const newTodos = mainData.filter((todo) => todo.status === "active");
    setTodos(newTodos);
    setMainData(newTodos);
  };

  return (
    <div>
      <div className="main">
        <div className="banner">
          <div className="content">
            <AddTodo
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              addTodo={addTodo}
            />
            <Todos
              todos={todos}
              changeStatus={changeStatus}
              allTab={allTab}
              activeTab={activeTab}
              completedTab={completedTab}
              tab={tab}
              clearCompleted={clearCompleted}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
