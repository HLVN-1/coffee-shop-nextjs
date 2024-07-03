import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Cart() {
  const [cartItems, setCartItems] = useState({ cart: [] });

  const router = useRouter();

  function goHome() {
    router.push("/");
  }

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/cart");
      const data = await res.json();
      setCartItems(data);
    }
    loadData();
  }, []);

  async function removeFromCart(id) {
    const res = await fetch(`/api/cart/${id}`, { method: "DELETE" });
    if (res.ok) {
      setCartItems((prevState) => ({
        cart: prevState.cart.filter((item) => item.id !== id),
      }));
      alert("Item removed from cart");
    } else {
      throw new Error("Failed to remove item from cart");
    }
  }

  async function updateCartItem(id, quantity) {
    const res = await fetch(`/api/cart/${id}`, {
      method: "PUT",
      body: JSON.stringify({ quantity }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setCartItems((prevState) => ({
        cart: prevState.cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      }));
    } else {
      throw new Error("Failed to update item in cart");
    }
  }

  return (
    <>
      <h1>Cart</h1>
      <h4>Here is our cart:</h4>
      <button onClick={goHome}>Go Home</button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {cartItems.cart.map((item, index) => {
          const itemName = item || item.title || "Unnamed Item";
          return (
            <div
              key={item.id}
              style={{
                width: "300px",
                border: "1px solid black",
                borderRadius: "10px",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>
                {item.id}. {item.name}
              </h3>
              <p>Quantity - {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              <button
                onClick={() => updateCartItem(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                onClick={() => updateCartItem(item.id, item.quantity - 1)}
              >
                -
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
