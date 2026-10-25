// const products = [
//   { id: 1, name: "Keyboard", price: 1200, stock: 4, category: "accessories" },
//   { id: 2, name: "Monitor", price: 7800, stock: 0, category: "screens" },
//   { id: 3, name: "Mouse", price: 600, stock: 7, category: "accessories" },
//   { id: 4, name: "Webcam", price: 2200, stock: 2, category: "accessories" },
//   { id: 5, name: "Laptop", price: 32000, stock: 1, category: "computers" },
// ];
// function getCatalogSummary(products) {
//   const filteredProducts = products.filter(
//     (p) => p.category === "accessories" && p.stock > 0,
//   );
//   const discountedProducts = filteredProducts.map((p) => ({
//     ...p,
//     price: p.price * 0.9,
//   }));
//   const sortedItems = discountedProducts.sort((a, b) => a.price - b.price);
//   const totalSum = sortedItems.reduce(
//     (total, item) => total + item.price * item.stock,
//     0,
//   );
//   return { items: sortedItems, totalValue: totalSum };
// }
// console.log(getCatalogSummary(products));
//! Slice
// function getCheapestProducts(products) {
//   const filteredProducts = products.filter((p) => p.stock > 0);
//   const sortedProdducts = filteredProducts.toSorted(
//     (a, b) => a.price - b.price,
//   );
//   const slicedProsucts = sortedProdducts.slice(0, 2);
//   return slicedProsucts;
// }
// console.log(getCheapestProducts(products));
//! flat
// const groups = [["Alex", "Anna"], ["Max", "John"], ["Kate"]];
// function getAllName(groups) {
//   const result = groups.flat();
//   return result;
// }
// console.log(getAllName(groups));
//! FlatMap()
// const students = [
//   { name: "Alex", subjects: ["Math", "Physics"] },
//   { name: "Anna", subjects: ["English", "History"] },
//   { name: "Max", subjects: ["Programming"] },
// ];
// const result = students.flatMap((p) => p.subjects);
// console.log(result);
//! SET
// const numbers = [1, 2, 2, 3, 3, 4];

// const unique = new Set(numbers);

// console.log(unique); // Set {1, 2, 3, 4}
// const students = [
//   { name: "Alex", subjects: ["Math", "Physics"] },
//   { name: "Anna", subjects: ["Math", "History"] },
//   { name: "Max", subjects: ["Physics", "Programming"] },
// ];
// function getUniqueSubjects(students) {
//   const allSubjects = students.flatMap((s) => s.subjects);
//   const result = [...new Set(allSubjects)];
//   return result;
// }
// console.log(getUniqueSubjects(students));

// const skills = new Set(["HTML", "CSS", "JavaScript"]);
// // function addSkill(skill) {
// //   if (skills.has(skill)) {
// //     return "Skill already exists";
// //   } else {
// //     skills.add(skill);
// //     return "skill added";
// //   }
// // }
// // console.log(addSkill("prt"));
// function removeSkill(skill) {
//   if (skills.delete(skill)) {
//     return "Skill removed";
//   } else {
//     return "Skill not found";
//   }
// }
// // console.log(removeSkill("LOLs"));
// const orders = [
//   {
//     id: 1,
//     status: "completed",
//     products: [
//       { name: "Mouse", price: 600, quantity: 2 },
//       { name: "Keyboard", price: 1200, quantity: 1 },
//     ],
//   },
//   {
//     id: 2,
//     status: "pending",
//     products: [{ name: "Monitor", price: 7800, quantity: 1 }],
//   },
//   {
//     id: 3,
//     status: "completed",
//     products: [
//       { name: "Mouse", price: 600, quantity: 1 },
//       { name: "Webcam", price: 2200, quantity: 2 },
//     ],
//   },
// ];
// function analyzeOrders(orders) {
//   const filteredProd = orders.filter((o) => o.status === "completed");
//   const flat = filteredProd.flatMap((p) => p.products);
//   const unique = [...new Set(flat.map((o) => o.name))];
//   const total = flat.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0,
//   );
//   return { uniqueProducts: unique, totalRevenue: total };
// }
// console.log(analyzeOrders(orders));
// const developers = [
//   {
//     name: "Alex",
//     tasks: [
//       { title: "Header", hours: 3, completed: true },
//       { title: "Login", hours: 8, completed: false },
//     ],
//   },
//   {
//     name: "Anna",
//     tasks: [
//       { title: "Database", hours: 12, completed: true },
//       { title: "API", hours: 6, completed: true },
//     ],
//   },
//   {
//     name: "Max",
//     tasks: [
//       { title: "Footer", hours: 2, completed: false },
//       { title: "Dashboard", hours: 10, completed: true },
//     ],
//   },
// ];
// function analyzeDevelopers(developers) {
//   const tasks = developers.flatMap((t) => t.tasks);
//   const filtered = tasks.filter((t) => t.completed);
//   const totalHours = filtered.reduce((total, item) => total + item.hours, 0);
//   const NameOfLongestTask = filtered
//     .toSorted((a, b) => b.hours - a.hours)
//     .slice(0, 2)
//     .map((n) => n.title);
//   const isIsntcomplete = tasks.some((t) => t.completed === false);
//   return {
//     completedTasks: filtered.length,
//     totalHours: totalHours,
//     topTasks: NameOfLongestTask,
//     hasUnfinished: isIsntcomplete,
//   };
// }
// console.log(analyzeDevelopers(developers));
const projects = [
  { id: 1, title: "Portfolio", hours: 12, status: "done", priority: "high" },
  { id: 2, title: "Shop", hours: 20, status: "progress", priority: "high" },
  { id: 3, title: "Weather App", hours: 6, status: "done", priority: "low" },
  { id: 4, title: "Landing", hours: 8, status: "done", priority: "medium" },
  {
    id: 5,
    title: "Dashboard",
    hours: 15,
    status: "progress",
    priority: "medium",
  },
];
function analyzeProjects(projects) {
  const filteredP = projects.filter((p) => p.status === "done");
  const sortedP = filteredP
    .toSorted((a, b) => b.hours - a.hours)
    .map((p) => p.title);
  const totalHours = filteredP.reduce((total, i) => total + i.hours, 0);
  const isCompleted = projects.some(
    (p) => p.status === "progress" && p.priority === "high",
  );
  const isAllComplited = projects.every((p) => p.status === "done");
  const findObj = projects.find((p) => p.id === 3);

  return {
    completedTitles: sortedP,
    totalHours: totalHours,
    hasHighPriorityPending: isCompleted,
    allCompleted: isAllComplited,
    projectById: findObj,
  };
}
console.log(analyzeProjects(projects));
