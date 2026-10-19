export function TaskStats({ tasks }) {
  const total = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const activeTasks = total - completedTasks;

  return (
    <div className="stats">
      <div className="stats__item">
        <span className="stats__value">{total}</span>
        <span className="stats__label">Total</span>
      </div>
      <div className="stats__item">
        <span className="stats__value">{activeTasks}</span>
        <span className="stats__label">Active</span>
      </div>
      <div className="stats__item stats__item--accent">
        <span className="stats__value">{completedTasks}</span>
        <span className="stats__label">Completed</span>
      </div>
    </div>
  );
}
