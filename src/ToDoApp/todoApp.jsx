import fetchTasks from "./tasksfetch.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskBoard from "./TaskBoard/taskBoard.jsx";
import TaskPanel from "./TaskPanel/taskPanel.jsx";

function TodoApp() {
  const dispatch = useDispatch();
  const storeState = useSelector((store) => store.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (storeState.loading) {
    return (
      <div>
        <h1 className="text-lg text-center font-bold bg-blue-100 my-2">
          Todo App
        </h1>
        <strong className="text-center block text-blue-500 my-4">
          Loading task data...
        </strong>
      </div>
    );
  }

  if (storeState.error) {
    return (
      <div>
        <h1 className="text-lg text-center font-bold bg-blue-100 my-2">
          Todo App
        </h1>
        <strong className="text-center block text-red-500 my-4">
          {storeState.error}
        </strong>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-lg text-center font-bold bg-blue-100 my-2">
        Todo App
      </h1>

      {!storeState.editTaskId && <TaskPanel />}
      <TaskBoard />
    </div>
  );
}

export default TodoApp;
