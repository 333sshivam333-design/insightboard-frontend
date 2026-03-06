import { Task } from "@/types/task";

interface Props {
  tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3">Tasks</h2>

      {tasks.map((task) => (
        <div key={task.id} className="border p-3 mb-2 rounded">
          <p className="font-semibold">
            {task.id}. {task.description}
          </p>

          <p>Priority: {task.priority}</p>

          <p>
            Dependencies:{" "}
            {task.dependencies.length > 0
              ? task.dependencies.join(", ")
              : "None"}
          </p>
        </div>
      ))}
    </div>
  );
}