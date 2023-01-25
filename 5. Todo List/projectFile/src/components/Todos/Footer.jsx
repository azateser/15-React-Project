import classNames from "classnames";

import "./Footer.css";

function Footer({
  todos,
  tab,
  allTab,
  activeTab,
  completedTab,
  clearCompleted,
}) {
  return (
    <div className="footer">
      <div>{todos.length} items left</div>
      <div className="options">
        <div
          onClick={allTab}
          className={classNames({
            "option": true,
            "active": tab === "all",
          })}
        >
          All
        </div>
        <div
          onClick={activeTab}
          className={classNames({
            "option": true,
            "active": tab === "active",
          })}
        >
          Active
        </div>
        <div
          onClick={completedTab}
          className={classNames({
            "option": true,
            "active": tab === "completed",
          })}
        >
          Completed
        </div>
      </div>
      <div className="cursor-pointer" onClick={clearCompleted}>
        Clear Completed
      </div>
    </div>
  );
}

export default Footer;
