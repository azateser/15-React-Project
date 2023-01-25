import { Fragment } from "react";

import Footer from "./Footer";

import "./Todos.css";

function Index({
  todos,
  changeStatus,
  allTab,
  activeTab,
  completedTab,
  tab,
  clearCompleted,
}) {
  return (
    <div>
      <div className="todos">
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            {todo.status === "completed" && (
              <Fragment>
                <div id={todo.id} onClick={changeStatus} className="complated">
                  <img
                    className="complated-icon"
                    src="./images/icon-check.svg"
                    alt=""
                  />
                </div>
                <div className="complated-text">{todo.text}</div>
              </Fragment>
            )}
            {todo.status === "active" && (
              <Fragment>
                <div
                  id={todo.id}
                  onClick={changeStatus}
                  className="active-icon"
                ></div>
                <div className="active-text">{todo.text}</div>
              </Fragment>
            )}
          </div>
        ))}

        <Footer
          todos={todos}
          tab={tab}
          allTab={allTab}
          activeTab={activeTab}
          completedTab={completedTab}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default Index;
