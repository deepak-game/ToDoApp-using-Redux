import { moveTask, deleteTask, showEdit, filterData } from "../todoSlice.js";
import AddTask from "../TaskPanel/TaskForm/addTask.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const options = {
  "To Do": ["In Progress", "Done"],
  "In Progress": ["To Do", "Done"],
  Done: ["To Do", "In Progress"],
};

function ShowTask({ task, idx }) {
  const editTaskId = useSelector((store) => store.tasks.editTaskId);
  const [nextStatus, setNextStatus] = useState("");
  const [isMoving, setIsMoving] = useState(false);

  return (
    <div className="bg-red-100 my-2 p-1 min-h-[230px]">
      {editTaskId == task.id ? (
        <AddTask taskData={task} editTaskId={editTaskId} />
      ) : (
        <>
          <p className="font-medium text-center text-red-500">Task{idx + 1}</p>
          <p>
            <span className="font-semibold">Title: </span> {task.title}
          </p>
          <p className="my-1">
            <span className="font-semibold">Description: </span>
            {task.description}
          </p>
          <div>
            <span className="font-semibold">Priority: </span>
            {task.priority}
          </div>
          <p className="my-1">
            <span className="font-semibold">By: </span> {task.assignee}
          </p>
          {isMoving ? (
            <strong className="font-medium text-blue-500 my-2">
              Moving Task to {nextStatus} state...
            </strong>
          ) : (
            <MoveTask
              task={task}
              updateMoving={setIsMoving}
              moveTo={nextStatus}
              updateMoveTo={setNextStatus}
            />
          )}
        </>
      )}
    </div>
  );
}

function MoveTask({ task, updateMoving, moveTo, updateMoveTo }) {
  const dispatch = useDispatch();

  function handleTaskMove(e) {
    updateMoveTo((s) => (s !== e.target.value ? e.target.value : ""));
    updateMoving(true);

    setTimeout(() => {
      dispatch(
        moveTask({ id: task.id, moveData: { ...task, status: e.target.value } })
      );
      dispatch(filterData([]));
    }, 1000);
  }

  function handleTaskDelete(id) {
    dispatch(deleteTask(id));
    dispatch(filterData([]));
  }

  function handleShowEdit(id) {
    dispatch(showEdit(id));
  }

  return (
    <div className="font-semibold">
      Move Task To:
      {options[task.status].map((el) => (
        <p className="mx-1" key={el}>
          <input
            type="checkbox"
            value={el}
            checked={moveTo === el}
            onChange={handleTaskMove}
          />
          <label className="mx-1">{el}</label>
        </p>
      ))}
      {task.status !== "Done" && (
        <button
          className="bg-gray-300 p-1 my-1
       text-white rounded-lg hover:bg-gray-500 
       transition-color duration-300 ease-in-out"
          onClick={() => handleShowEdit(task.id)}
        >
          Edit Task
        </button>
      )}
      <button
        className="bg-gray-300 p-1 my-1 mx-1
       text-white rounded-lg hover:bg-gray-500 
       transition-color duration-300 ease-in-out"
        onClick={() => handleTaskDelete(task.id)}
      >
        Delete Task
      </button>
    </div>
  );
}

export default ShowTask;
