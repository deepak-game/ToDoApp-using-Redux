import TodoTask from "./todoTask.jsx";
import ProgressTask from "./progresstask.jsx";
import CompletedTask from "./completedTask.jsx";

function TaskBoard() {
  return (
    <div className="p-2 grid grid-cols-1 place-items-center sm:grid-cols-3 sm:alig-center sm:items-start sm:gap-4">
      <TodoTask />
      <ProgressTask />
      <CompletedTask />
    </div>
  );
}

export default TaskBoard;
