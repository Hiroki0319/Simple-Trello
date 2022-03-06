import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    //タスクを並び変える
    const remove = taskList.splice(result.source.index, 1);
    taskList.splice(result.destination.index, 0, remove[0]);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.idf}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
