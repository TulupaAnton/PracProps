import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return <div className="list__empty">No tasks here yet. Add one above.</div>;
  }

  return (
    <ul className="list">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </ul>
  );
}
