export function TaskItem({ task, onDelete, onToggle }) {
  const level = task.priority.toLowerCase();

  return (
    <li className={`task task--${level}${task.completed ? " task--done" : ""}`}>
      <input
        className="task__check"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark "${task.text}" as ${task.completed ? "active" : "completed"}`}
      />
      <div className="task__body">
        <h3 className="task__title">{task.text}</h3>
        <p className="task__priority">{task.priority} priority</p>
      </div>
      <button
        className="task__delete"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete "${task.text}"`}
      >
        ×
      </button>
    </li>
  );
}
