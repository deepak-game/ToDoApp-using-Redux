import AddTask from "./TaskForm/addTask.jsx";
import Search from "./FilterTask/search.jsx";

function TaskPanel() {
  return (
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 sm:items-start">
      <AddTask />
      <Search />
    </div>
  );
}

export default TaskPanel;
