import React from "react";
import { useState } from "react";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div className="tascCardTitleInputArea" onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="inputCard"
            type="text"
            maxLength={10}
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            autoFocus
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
