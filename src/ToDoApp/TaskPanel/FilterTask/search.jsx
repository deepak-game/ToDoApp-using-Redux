import { useSelector, useDispatch } from "react-redux";
import { filterData } from "../../todoSlice.js";
import { useState } from "react";

function Search() {
  const data = useSelector((store) => store.tasks.items);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const uniqueTitle = [...new Set(data.map((el) => el.title))];
  const uniqueAssignee = [...new Set(data.map((el) => el.assignee))];

  function handleQuery(input) {
    setQuery(input);

    const filtered = data.filter(
      (task) =>
        task.title.toLowerCase().includes(input.trim().toLowerCase()) ||
        task.assignee.toLowerCase().includes(input.trim().toLowerCase())
    );

    dispatch(filterData(filtered));
  }

  function clearSearch() {
    setQuery("");
    dispatch(filterData([]));
  }

  return (
    <div className="border  max-w-[300px] my-2 p-2 text-center">
      <strong className="text-lg text-center text-blue-200">
        Filter and Search Task
      </strong>
      <input
        list="task-suggestions"
        placeholder="Search tasks by assignee and title..."
        className="border my-2 w-[100%] rounded-lg"
        value={query}
        onChange={(e) => handleQuery(e.target.value)}
      />
      <datalist id="task-suggestions">
        {uniqueTitle.map((el, id) => (
          <option value={el} key={`title-${id}`} />
        ))}
        {uniqueAssignee.map((el, id) => (
          <option value={el} key={`assignee-${id}`} />
        ))}
      </datalist>
      <button
        className="bg-blue-200 p-1 rounded-lg hover:bg-blue-400"
        onClick={clearSearch}
      >
        Clear Search
      </button>
    </div>
  );
}
export default Search;
