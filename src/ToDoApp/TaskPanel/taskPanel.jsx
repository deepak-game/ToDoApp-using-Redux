import AddTask from "./TaskForm/addTask.jsx";
import Search from "./FilterTask/search.jsx";

function TaskPanel() {
  return (
    <div className="grid grid-cols-2 items-start">
      <AddTask />
      <Search />
    </div>
  );
}
export default TaskPanel;
