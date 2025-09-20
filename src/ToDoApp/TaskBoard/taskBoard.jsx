import TodoTask from "./todoTask.jsx";
import ProgressTask from "./progresstask.jsx";
import CompletedTask from "./completedTask.jsx";

function TaskBoard() {
  return (
    <div className="grid grid-cols-3 alig-center items-start gap-4">
      <TodoTask />
      <ProgressTask />
      <CompletedTask />
    </div>
  );
}

export default TaskBoard;
