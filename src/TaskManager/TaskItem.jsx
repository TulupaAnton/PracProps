export function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div>
      <h3>{task.text}</h3>
      <p>{task.priority}</p>
      {/* <input type="checkbox" /> */}
      {task.completed ? <p>Complited</p> : <p>Active</p>}
      <button onClick={() => onDelete(task.id)}>Detele</button>
      <button onClick={() => onToggle(task.id)}>Toggle</button>
    </div>
  );
}
