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
const students = [
  { name: "Alex", subjects: ["Math", "Physics"] },
  { name: "Anna", subjects: ["Math", "History"] },
  { name: "Max", subjects: ["Physics", "Programming"] },
];
function getUniqueSubjects(students) {
  const allSubjects = students.flatMap((s) => s.subjects);
  const result = [...new Set(allSubjects)];
  return result;
}
console.log(getUniqueSubjects(students));
