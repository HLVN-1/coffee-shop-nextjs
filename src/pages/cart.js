// THIS IS THE CART PAGE TO BE ACCESSED WHEN URL IS /CARTS

// import { db } from "@/server/db";

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     const cartItems = db.cart.get();
//     res.status(200).json({ menu: cartItems });
//   } else if (req.method === "POST") {
//     const { id, quantity } = req.body;
//     db.cart.add({ id, quantity });
//     res.status(200).json({ message: "Item added to cart" });
//   } else {
//     res.status(404).json({ message: "We only support GET requests" });
//   }
// }

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  function goHome() {
    router.push("/");
  }

  useEffect(() => {
    fetch("/api/cart")
      .then((response) => response.json())
      .then((data) => setCartItems(data.cart));
  }, []);

  const addToCart = async (id, quantity) => {
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, quantity }),
    });
    const data = await response.json();
    alert(data.message);
  };

  const emptyCart = async () => {
    try {
      const response = await fetch("/api/cart", {
        method: "DELETE",
      });
      const data = await response.json();
      alert(data.message);
      setCartItems([]);
    } catch (error) {
      console.error("Failed to empty cart:", error);
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.id} {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={emptyCart}>Empty Cart</button>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}
