import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cart from "./cart";

export default function Home() {
  const [menu, setMenu] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/menu");
      const data = await res.json();
      setMenu(data.menu);
    }
    loadData();
  }, []);

  // NEEDED TO ADD NAME PARAMETER TO THIS FUNCTION. AND TO FETCH REQUEST. DOI
  function addToCart(id, name) {
    fetch(`/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, quantity: 1 }),
    });
  }

  function viewCart() {
    router.push("/cart");
  }

  if (menu.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Welcome to Coffee Shop!</h1>
      <h4>Here is our menu</h4>
      <button onClick={viewCart}>View Your Cart</button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {menu.map((item) => {
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
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button onClick={() => addToCart(item.id, item.name)}>
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
