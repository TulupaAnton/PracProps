import { useState } from "react";
import styles from "./styles/First.module.css";

export function First() {
  const [cart, setCart] = useState([
    { id: 1, name: "Laptop", price: 1200, quantity: 1 },
    { id: 2, name: "Mouse", price: 50, quantity: 3 },
    { id: 3, name: "Keyboard", price: 150, quantity: 2 },
  ]);

  function Total() {
    return cart.reduce((total, prod) => {
      return total + prod.quantity * prod.price;
    }, 0);
  }
  function increaseQuantity(id) {
    setCart(
      (prev) =>
        prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)), //!
    );
  }
  function decreaseQuantity(id) {
    setCart((prev) => {
      const product = prev.find((p) => p.id === id);
      if (product && product.quantity === 1) {
        return prev.filter((p) => p.id !== id);
      }
      return prev.map((p) =>
        p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p,
      );
    });
  }
  function removeProduct(id) {
    setCart((prev) => {
      return prev.filter((p) => p.id !== id);
    });
  }
  function clearCart() {
    setCart([]);
  }
  function getTotalQuantity(){
    setCart(prev=>prev.reduce(p=>(total,prod))=>{
       
    },0)
  }
  return (
    <div className={styles.container}>
      <ul className={styles.cartList}>
        {cart.map((c) => {
          return (
            <li key={c.id} className={styles.cartItem}>
              <span className={styles.itemName}>{c.name}</span>
              <button onClick={() => increaseQuantity(c.id)}>+</button>
              <button onClick={() => decreaseQuantity(c.id)}>-</button>
              <button onClick={() => removeProduct(c.id)}>Delete</button>
              <span className={styles.itemPrice}>${c.price}</span>
              <span className={styles.itemQuantity}>× {c.quantity}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={() => clearCart()}>Clear Cart</button>
      <div id="price" className={styles.priceContainer}>
        <h3 className={styles.totalLabel}>Total:</h3>
        <h3 className={styles.totalValue}>${Total()}</h3>
      </div>
    </div>
  );
}
