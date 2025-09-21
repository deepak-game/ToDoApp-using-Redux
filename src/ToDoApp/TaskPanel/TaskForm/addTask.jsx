import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../todoSlice.js";

function AddTask({ taskData, editTaskId }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: taskData || {
      title: "",
      description: "",
      priority: "",
      assignee: "",
    },
  });

  const onSubmit = (data) => {
    if (editTaskId) {
      dispatch(updateTask({ id: taskData.id, updatedData: { ...data } }));
    } else {
      dispatch(addTask(data));
    }
    reset();
  };

  return (
    <div className="max-w-[400px] border m-2 p-2">
      <h1 className="font-medium text-blue-200 text-center">
        {editTaskId ? "Edit Task" : "Add Task"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-1 flex flex-col justify-center">
          <label className="font-medium">Title:</label>
          <input
            type="text"
            className="border focus:outline-0"
            {...register("title", { required: true })}
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </div>

        <div className="m-1 flex flex-col justify-center">
          <label className="font-medium">Description:</label>
          <input
            type="text"
            className="border focus:outline-0"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p className="text-red-500">Description is required</p>
          )}
        </div>

        <div className="m-1">
          <label className="font-medium">Priority:</label>
          <div className="flex gap-2 mt-1">
            {["High", "Medium", "Low"].map((level) => (
              <label key={level}>
                <input
                  type="radio"
                  value={level}
                  {...register("priority", { required: true })}
                />
                {level}
              </label>
            ))}
          </div>
          {errors.priority && (
            <p className="text-red-500">Priority is required</p>
          )}
        </div>

        <div className="m-1 flex flex-col justify-center">
          <label className="font-medium">Assignee:</label>
          <input
            type="text"
            className="border focus:outline-0"
            {...register("assignee", { required: true })}
          />
          {errors.assignee && (
            <p className="text-red-500">Assignee is required</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-red-300 p-1 rounded-lg hover:bg-red-500"
        >
          {editTaskId ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default AddTask;
