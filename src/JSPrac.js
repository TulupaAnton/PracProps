const products = [
  { id: 1, name: "Keyboard", price: 1200, stock: 4, category: "accessories" },
  { id: 2, name: "Monitor", price: 7800, stock: 0, category: "screens" },
  { id: 3, name: "Mouse", price: 600, stock: 7, category: "accessories" },
  { id: 4, name: "Webcam", price: 2200, stock: 2, category: "accessories" },
  { id: 5, name: "Laptop", price: 32000, stock: 1, category: "computers" },
];
function getCatalogSummary(products) {
  const filteredProducts = products.filter(
    (p) => p.category === "accessories" && p.stock > 0,
  );
  const discountedProducts = filteredProducts.map((p) => ({
    ...p,
    price: p.price * 0.9,
  }));
  const sortedItems = discountedProducts.sort((a, b) => a.price - b.price);
  const totalSum = sortedItems.reduce(
    (total, item) => total + item.price * item.stock,
    0,
  );
  return { items: sortedItems, totalValue: totalSum };
}
console.log(getCatalogSummary(products));
