// import { useState } from "react";
// export function TodoApp() {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   function addTask() {
//     if (inputValue.trim().length === 0) {
//       return;
//     } else {
//       setTasks((prev) => [
//         ...prev,
//         {
//           id: Math.max(0, ...prev.map((item) => item.id)) + 1,
//           text: inputValue,
//           done: false,
//         },
//       ]);
//       setInputValue("");
//     }
//   }
//   function remove(id) {
//     setTasks((prev) => prev.filter((item) => item.id !== id));
//   }

//   function toggleTask(id) {
//     setTasks((prev) =>
//       prev.map((item) => {
//         if (item.id === id) {
//           return {
//             ...item,
//             done: !item.done,
//           };
//         }
//         return item;
//       }),
//     );
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={() => addTask()}>Add task</button>
//       {tasks.map((item) => (
//         <div key={item.id}>
//           <p>{item.text}</p>
//           <input
//             type="checkbox"
//             checked={item.done}
//             onChange={() => toggleTask(item.id)}
//           />
//           <button onClick={() => remove(item.id)}>Delete</button>
//         </div>
//       ))}
//       <p>{tasks.length}: tasks</p>
//       <p>
//         {tasks.filter((item) => item.done === true)}
//         {}:Ended tasks
//       </p>
//     </div>
//   );
// }
// export default TodoApp;
