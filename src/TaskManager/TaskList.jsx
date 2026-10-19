import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <div>
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
}
