import { useSelector } from "react-redux";
import ShowTask from "./showTask.jsx";

//Component to show todo task
function CompletedTask() {
  const { items, filterData } = useSelector((store) => store.tasks);
  const source = filterData.length ? filterData : items;
  const taskData = source.filter((el) => el.status === "Done");

  return (
    <div className="bg-gray-100 p-2 sm:min-h-64 sm:min-w-64">
      <h1 className="font-semibold text-center text-xl">Completed Tasks</h1>
      {taskData.length ? (
        taskData.map((el, i) => (
          <ShowTask task={el} idx={i} status={el.status} key={el.id} />
        ))
      ) : (
        <strong className="font-medium text-green-300">
          No completed task
        </strong>
      )}
    </div>
  );
}

export default CompletedTask;
