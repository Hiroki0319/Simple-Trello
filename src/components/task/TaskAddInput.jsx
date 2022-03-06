import React from "react";

const TaskAddInput = ({ inputText, setInputText, setTaskList, taskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        draggableId: `task-${taskList.length}`,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          placeholder="テキストを入力"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
