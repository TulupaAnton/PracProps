import { useState } from "react";

function App() {
  // const [player, setPlayer] = useState({
  //   name: "Shadow",
  //   gold: 100,
  //   stats: {
  //     health: 100,
  //     damage: 20,
  //   },
  // });
  // const [inventory, setInventory] = useState([
  //   { id: 1, name: "Sword", type: "weapon" },
  //   { id: 2, name: "Shield", type: "armor" },
  //   { id: 3, name: "Potion", type: "potion" },
  //   { id: 4, name: "Axe", type: "weapon" },
  // ]);
  // function removeWeapons() {
  //   setInventory((prev) => prev.filter((item) => item.type !== "weapon"));
  // }
  // function earnGold() {
  //   setPlayer((prev) => ({
  //     ...prev,
  //     gold: prev.gold + 50,
  //   }));
  // }
  // function takeDamage() {
  //   setPlayer((prev) => ({
  //     ...prev,
  //     stats: {
  //       ...prev.stats,
  //       health: Math.max(0, prev.stats.health - 20),
  //     },
  //   }));
  // }
  // function addPotion(id) {
  //   setInventory((prev) => [
  //     ...prev,
  //     {
  //       id: Math.max(0, ...prev.map((item) => item.id)) + 1,
  //       name: "Health Potion",
  //       type: "potion",
  //     },
  //   ]);
  // }
  // function removeById(id) {
  //   setInventory((prev) => prev.filter((item) => item.id !== id));
  // }
  // return (
  //   <>
  //     <h1>{player.name}</h1>
  //     <p>Gold: {player.gold}</p>
  //     <p>Health: {player.stats.health}</p>
  //     <p>Damage: {player.stats.damage}</p>
  //     <button onClick={removeWeapons}>Удалить оружие</button>
  //     <button onClick={earnGold}>Получить золото</button>
  //     <button onClick={takeDamage} disabled={player.stats.health === 0}>
  //       Получить урон
  //     </button>
  //     <button onClick={addPotion}>Добавить зелье</button>
  //     <h2>Inventory:</h2>
  //     <div>
  //       {inventory.map((item) => (
  //         <div key={item.id}>
  //           <p>{item.name}</p>
  //           <button
  //             onClick={() => {
  //               removeById(item.id);
  //             }}
  //           >
  //             Delete
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  // </>
  // );
  // const [inventory, setInventory] = useState([
  //   { id: 1, name: "Sword", damage: 20 },
  //   { id: 2, name: "Axe", damage: 35 },
  //   { id: 3, name: "Bow", damage: 15 },
  // ]);
  // function upgradeWeapon(id) {
  //   setInventory((prev) =>
  //     prev.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           damage: item.damage + 10,
  //         };
  //       }
  //       return item;
  //     }),
  //   );
  // }
  //   const [inventory, setInventory] = useState([
  //     { id: 1, name: "Sword", damage: 20, type: "weapon" },
  //     { id: 2, name: "Shield", damage: 0, type: "armor" }, //weapon +10 dam
  //     { id: 3, name: "Axe", damage: 35, type: "weapon" },
  //     { id: 4, name: "Bow", damage: 15, type: "weapon" }, //dell if dam <30
  //   ]);
  //   function upgradeAllWeapons() {
  //     setInventory((prev) =>
  //       prev.map((item) => {
  //         if (item.type === "weapon") {
  //           return {
  //             ...item,
  //             damage: item.damage + 10,
  //           };
  //         }
  //         return item;
  //       }),
  //     );
  //   }
  //   function removeWeakWeapons() {
  //     setInventory((prev) =>prev.filter(item=>item.damage>=30 || item.type !=="weapon"))
  // }
  // const [numbers, setNumbers] = useState([5, 10, 15, 20, 25]);
  // function changeNumbers() {
  //   setNumbers((prev) => prev.filter((num) => num >= 10).map((num) => num + 5));
  // }
  // const [users, setUsers] = useState([
  //   { id: 1, name: "Alex", age: 17 },
  //   { id: 2, name: "Max", age: 22 },
  //   { id: 3, name: "Anna", age: 19 },
  //   { id: 4, name: "John", age: 16 },
  // ]);
  // function updateUsers() {
  //   setUsers((prev) =>
  //     prev
  //       .filter((user) => user.age >= 18)
  //       .map((user) => ({
  //         ...user,
  //         age: user.age + 1,
  //       })),
  //   );
  // }
  // const [players, setPlayers] = useState([
  //   {
  //     id: 1,
  //     name: "Alex",
  //     stats: { health: 100, damage: 20 },
  //   },
  //   {
  //     id: 2,
  //     name: "Max",
  //     stats: { health: 80, damage: 35 },
  //   },
  //   {
  //     id: 3,
  //     name: "Anna",
  //     stats: { health: 60, damage: 15 },
  //   },
  // ]);
  // //Увеличивает health каждого игрока на 20.
  // //Не позволяет здоровью превышать 100.
  // //Сохраняет name, id и damage без изменений.
  // //Использует один вызов setPlayers().
  // function healPlayers() {
  //   setPlayers((prev) =>
  //     prev.map((user) => ({
  //       ...user,
  //       stats: {
  //         ...user.stats,
  //         health: Math.min(100, user.stats.health + 20),
  //       },
  //     })),
  //   );
  // }
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: "Laptop",
  //     price: 1200,
  //     category: "electronics",
  //     inStock: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Mouse",
  //     price: 50,
  //     category: "electronics",
  //     inStock: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Desk",
  //     price: 300,
  //     category: "furniture",
  //     inStock: true,
  //   },
  //   {
  //     id: 4,
  //     name: "Phone",
  //     price: 800,
  //     category: "electronics",
  //     inStock: true,
  //   },
  //   {
  //     id: 5,
  //     name: "Chair",
  //     price: 150,
  //     category: "furniture",
  //     inStock: false,
  //   },
  // ]);
  // Удалит все товары, которых нет в наличии (inStock: false).
  // Увеличит цену оставшихся товаров из категории "electronics" на 100.
  // Оставит цены товаров других категорий без изменений.
  // Сохранит все остальные свойства каждого товара.
  // function updateProducts() {
  //   setProducts((prev) =>
  //     prev
  //       .filter((item) => item.inStock === true)
  //       .map((item) => {
  //         if (item.category === "electronics") {
  //           return {
  //             ...item,
  //             price: item.price + 100,
  //           };
  //         }
  //         return item;
  //       }),
  //   );
  // }
  // return (
  //   <div>
  //     <button onClick={updateProducts}>Update Products</button>
  //     <pre>{JSON.stringify(products, null, 2)}</pre>
  //   </div>
  // );
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     name: "Alex",
  //     active: true,
  //     stats: { points: 80, level: 2 },
  //   },
  //   {
  //     id: 2,
  //     name: "Max",
  //     active: false,
  //     stats: { points: 150, level: 3 },
  //   },
  //   {
  //     id: 3,
  //     name: "Anna",
  //     active: true,
  //     stats: { points: 120, level: 4 },
  //   },
  //   {
  //     id: 4,
  //     name: "John",
  //     active: true,
  //     stats: { points: 40, level: 1 },
  //   },
  // ]);
  //Удаляет всех неактивных пользователей (active: false).
  //Увеличивает points на 50 только тем, у кого изначально было 100 или больше очков.
  //Увеличивает level на 1 у этих же пользователей.
  //Сохраняет остальные свойства без изменений.
  //Использует один вызов setUsers().
  // function rewardUsers() {
  //   setUsers((prev) =>
  //     prev
  //       .filter((user) => user.active === true)
  //       .map((user) => {
  //         if (user.stats.points >= 100) {
  //           return {
  //             ...user,
  //             stats: {
  //               ...user.stats,
  //               points: user.stats.points + 50,
  //               level: user.stats.level + 1,
  //             },
  //           };
  //         }
  //         return user;
  //       }),
  //     );
  //   }
  // const [products, setProducts] = useState([
  //   { id: 1, name: "Laptop", price: 900, discount: 10 },
  //   { id: 2, name: "Phone", price: 600, discount: 20 },
  //   { id: 3, name: "Mouse", price: 100, discount: 50 },
  //   { id: 4, name: "Keyboard", price: 200, discount: 0 },
  // ]);
  //Уменьшает цену каждого товара на его процент скидки.
  //После применения скидок удаляет товары, итоговая цена которых меньше 150.
  //Сохраняет id, name и discount.
  //Использует один вызов setProducts().
  // function applyDiscond() {
  //   setProducts((prev) =>
  //     prev
  //       .map((item) => ({
  //         ...item,
  //         price: item.price * (1 - item.discount / 100),
  //       }))
  //       .filter((item) => item.price >= 150),
  //   );
  // }
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: "Laptop",
  //     price: 1000,
  //     discount: 10,
  //     discountApplied: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Phone",
  //     price: 500,
  //     discount: 20,
  //     discountApplied: false,
  //   },
  // ]);
  //Применяет скидку только к товарам, у которых discountApplied === false.
  //После применения устанавливает discountApplied: true.
  //При повторном вызове не изменяет уже обработанные товары.
  //Сохраняет остальные свойства объектов.
  // function applyDiscond() {
  //   setProducts((prev) =>
  //     prev.map((item) => {
  //       if (item.discountApplied === false) {
  //         return {
  //           ...item,
  //           price: item.price * (1 - item.discount / 100),
  //           discountApplied: true,
  //         };
  //       }
  //       return item;
  //     }),
  //   );
  // }
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: "Laptop",
  //     originalPrice: 1000,
  //     price: 900,
  //     discount: 10,
  //     discountApplied: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Phone",
  //     originalPrice: 500,
  //     price: 400,
  //     discount: 20,
  //     discountApplied: true,
  //   },
  // ]);
  // function resetDiscounts() {
  //   setProducts((prev) =>
  //     prev.map((item) => ({
  //       ...item,
  //       price: item.originalPrice,
  //       discountApplied: false,
  //     })),
  //   );
  // }
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: "Laptop",
  //     price: 1000,
  //     discount: 10,
  //     discountApplied: false,
  //   },
  // ]);
  // function changePrice() {
  //   setProducts((prev) =>
  //     prev.map((item) => {
  //       if (item.id === 1) {
  //         return {
  //           ...item,
  //           price: 900,
  //         };
  //       }
  //       return item;
  //     }),
  //   );
  // }
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     name: "Alex",
  //     active: true,
  //     address: {
  //       city: "Kyiv",
  //       street: "Main",
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: "Max",
  //     active: false,
  //     address: {
  //       city: "Lviv",
  //       street: "Central",
  //     },
  //   },
  //   {
  //     id: 3,
  //     name: "Anna",
  //     active: true,
  //     address: {
  //       city: "Kyiv",
  //       street: "Shevchenka",
  //     },
  //   },
  // ]);
  //Удаляет всех неактивных пользователей.
  //Меняет город с "Kyiv" на "Odesa" только у пользователей из Киева.
  //Сохраняет остальные свойства, включая street.
  //Использует один вызов setUsers().
  // function updateUsers() {
  //   setUsers((prev) =>
  //     prev
  //       .filter((user) => user.active === true)
  //       .map((user) => {
  //         if (user.address.city === "Kyiv") {
  //           return {
  //             ...user,
  //             address: {
  //               ...user.address,
  //               city: "Odesa",
  //             },
  //           };
  //         }
  //         return user;
  //       }),
  //   );
  // }
  // const [products, setProducts] = useState([
  //   { id: 1, name: "Laptop", price: 1200, stock: 5 },
  //   { id: 2, name: "Mouse", price: 50, stock: 0 },
  //   { id: 3, name: "Phone", price: 800, stock: 3 },
  //   { id: 4, name: "Keyboard", price: 150, stock: 0 },
  // ]);
  //Удаляет все товары, у которых stock равен 0.
  //Уменьшает stock оставшихся товаров на 1.
  //Увеличивает цену на 100 только у товаров, которые стоят 800 или больше.
  // function updateStock() {
  //   setProducts((prev) =>
  //     prev
  //       .filter((p) => p.stock !== 0)
  //       .map((p) => {
  //         const newPrice = p.price >= 800 ? p.price + 100 : p.price;
  //         return {
  //           ...p,
  //           price: newPrice,
  //           stock: p.stock - 1,
  //         };
  //       }),
  //   );
  // }
  //! FIND()
  // const users = [
  //   { id: 1, name: "Alex", age: 17 },
  //   { id: 2, name: "Max", age: 22 },
  //   { id: 3, name: "Anna", age: 19 },
  //   { id: 4, name: "John", age: 16 },
  // ];
  // const result = users.find((user) => user.age >= 18);
  // console.log(result);
  // const products = [
  //   { id: 1, name: "Laptop", price: 1200, inStock: true },
  //   { id: 2, name: "Mouse", price: 50, inStock: false },
  //   { id: 3, name: "Phone", price: 800, inStock: true },
  //   { id: 4, name: "Keyboard", price: 150, inStock: true },
  // ];
  // function findProduct(maxPrice) {
  //   const result = products.find(
  //     (p) => p.inStock === true && p.price <= maxPrice,
  //   );
  //   return result;
  // }
  // console.log(findProduct(150));
  //! Some()
  // const products = [
  //   { name: "Laptop", price: 1200, stock: 5 },
  //   { name: "Mouse", price: 50, stock: 0 },
  //   { name: "Phone", price: 800, stock: 3 },
  // ];
  // function findProduct() {
  //   const result = products.some((p) => p.price < 100 && p.stock > 0);
  //   return result;
  // }
  // console.log(findProduct());
  ///! Every()
  // const users = [
  //   { id: 1, name: "Alex", age: 22, active: true },
  //   { id: 2, name: "Max", age: 19, active: true },
  //   { id: 3, name: "Anna", age: 17, active: false },
  // ];
  // function checkUsers() {
  //   const result = users.every((user) => user.age > 18 && user.active === true);
  //   return result;
  // }
  // console.log(checkUsers());
  // const [products, setProducts] = useState([
  //   { id: 1, name: "Laptop", price: 1200, stock: 5 },
  //   { id: 2, name: "Mouse", price: 50, stock: 0 },
  //   { id: 3, name: "Phone", price: 800, stock: 3 },
  //   { id: 4, name: "Keyboard", price: 150, stock: 2 },
  // ]);
  //getAvailableProducts() — возвращает все товары, которые есть на складе.
  //hasExpensiveProduct() — возвращает true, если существует хотя бы один товар дороже 1000.
  //sellProduct(id) — уменьшает stock товара с указанным id на 1. Если его stock уже равен 0, ничего не меняет. Используй setProducts() без мутаций.
  // function getAvailableProducts() {
  //   const result = products.filter((p) => p.stock !== 0);
  //   return result;
  // }
  // function hasExpensiveProduct() {
  //   const result2 = products.some((p) => p.price > 1000);
  //   return result2;
  // }
  // function sellProduct(id) {
  //   setProducts((prod) =>
  //     prod.map((p) =>
  //       p.id === id && p.stock !== 0 ? { ...p, stock: p.stock - 1 } : p,
  //     ),
  //   );
  // }
  // const [cart, setCart] = useState([
  //   { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  //   { id: 2, name: "Mouse", price: 50, quantity: 2 },
  //   { id: 3, name: "Keyboard", price: 150, quantity: 1 },
  // ]);
  //Если товар с таким id уже есть в корзине, увеличь его quantity на 1.
  //Если товара нет, добавь новый объект с quantity: 1.
  //Остальные товары должны остаться без изменений.
  //Используй setCart() без мутаций.
  // function addToCart(product) {
  //   setCart((prev) => {
  //     const isExist = prev.some((c) => c.id === product.id);
  //     if (isExist) {
  //       return prev.map((i) =>
  //         i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
  //       );
  //     } else {
  //       return [...prev, { ...product, quantity: 1 }];
  //     }
  //   });
  // }
  // 1. Если quantity > 1, уменьшаем количество нужного товара на 1.
  // 2. Если quantity === 1, полностью удаляем товар из корзины.
  // 3. Остальные товары оставляем без изменений.
  // 4. Используем только один setCart().
  // function decreaseQuantity(id) {
  //   setCart((prev) => {
  //     const product = prev.find((p) => p.id === id);
  //     if (product) {
  //       if (product.quantity === 1) {
  //         return prev.filter((p) => p.id !== id);
  //       }
  //       return prev.map((p) =>
  //         p.quantity > 1 && p.id === id
  //           ? { ...p, quantity: p.quantity - 1 }
  //           : p,
  //       );
  //     }
  //     return prev;
  //   });
  // }
  // const [cart, setCart] = useState([
  //   { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  //   { id: 2, name: "Mouse", price: 50, quantity: 2 },
  //   { id: 3, name: "Keyboard", price: 150, quantity: 1 },
  // ]);
  // function getCartTotal() {
  //   return cart.reduce((total, product) => {
  //     return total + product.price * product.quantity;
  //   }, 0);
  // }
  // function getTotalQuantity() {
  //   return cart.reduce((total, product) => {
  //     return total + product.quantity;
  //   }, 0);
  // }
  // const orders = [
  //   { id: 1, price: 500, status: "completed" },
  //   { id: 2, price: 300, status: "pending" },
  //   { id: 3, price: 800, status: "completed" },
  //   { id: 4, price: 200, status: "cancelled" },
  //   { id: 5, price: 400, status: "completed" },
  // ];
  // 1. Считает общую стоимость только выполненных заказов (status === "completed").
  // 2. Игнорирует остальные заказы.
  // 3. Использует reduce().
  // function getCompletedTotal() {
  //   return orders.reduce((total, prod) => {
  //     if (prod.status === "completed") {
  //       return total + prod.price;
  //     }
  //     return total;
  //   }, 0);
  // }
  // const [cart, setCart] = useState([
  //   { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  //   { id: 2, name: "Mouse", price: 50, quantity: 3 },
  //   { id: 3, name: "Keyboard", price: 150, quantity: 2 },
  // ]);
  // //Для каждого товара нужно показать название, цену,
  // //  количество и общую стоимость этого товара (price * quantity).
  // <div id="Main">
  //   <ul>
  //     {cart.map((c) => {
  //       return <li key={c.id}>{c.name}</li>;
  //     })}
  //   </ul>
  // </div>;
  //!SORT()
  // const prices = [500, 100, 1200, 50, 300];
  // const ascending = [...prices].sort((a, b) => a - b);
  // const descending = [...prices].sort((a, b) => b - a);
  //? Practice
  // const products = [
  //   { id: 1, name: "Laptop", price: 1000, stock: 5 },
  //   { id: 2, name: "Mouse", price: 100, stock: 0 },
  //   { id: 3, name: "Keyboard", price: 200, stock: 3 },
  //   { id: 4, name: "Phone", price: 800, stock: 2 },
  //  ];
  //Напиши одну функцию processProducts(), которая:
  //1. Убирает товары, у которых stock === 0.
  //2. Увеличивает цену оставшихся товаров на 50.
  //3. Уменьшает stock каждого оставшегося товара на 1.
  //4. Сортирует товары по цене от меньшей к большей.
  //5. Возвращает новый массив, не изменяя исходный products.
  // function processProducts() {
  //   const filtered = products.filter((p) => p.stock !== 0);
  //   const counted = filtered.map((p) => ({
  //     ...p,
  //     price: p.price + 50,
  //     stock: p.stock - 1,
  //   }));
  //   counted.sort((a, b) => a.price - b.price);
  //   return counted;
  // }
  // const orders = [
  //   { id: 1, customer: "Alex", total: 500, status: "completed" },
  //   { id: 2, customer: "Anna", total: 1200, status: "pending" },
  //   { id: 3, customer: "Max", total: 800, status: "completed" },
  //   { id: 4, customer: "John", total: 300, status: "completed" },
  // ];
  // function getOrder(id) {
  //   return orders.find((order) => order.id === id);
  // }
  // function hasPendingOrders() {
  //   return orders.some((order) => order.status === "pending");
  // }
  // function areAllCompleted() {
  //   return orders.every((order) => order.status === "completed");
  // }
  // function getCompletedRevenue() {
  //   const CompletedOrd = orders.filter((o) => o.status === "completed");
  //   return CompletedOrd.reduce((total, order) => total + order.total, 0);
  // }
  // console.log(getCompletedRevenue());
}
export default App;
