import { useSelector } from "react-redux";
import ShowTask from "./showTask.jsx";

//Component to show todo task
function TodoTask() {
  const { items, filterData } = useSelector((store) => store.tasks);
  const source = filterData.length ? filterData : items;
  const taskData = source.filter((el) => el.status === "To Do");

  return (
    <div className="bg-gray-100 p-2 min-h-32">
      <h1 className="font-semibold text-center text-xl">TodoTasks</h1>
      {taskData.length ? (
        taskData.map((el, i) => (
          <ShowTask task={el} idx={i} status={el.status} key={el.id} />
        ))
      ) : (
        <strong className="font-medium text-green-300">No Task to do</strong>
      )}
    </div>
  );
}

export default TodoTask;
