import * as fs from "fs";

function readDb() {
  return JSON.parse(fs.readFileSync("./src/server/db.json"));
}

function writeDb(updatedDb) {
  fs.writeFileSync("./src/server/db.json", JSON.stringify(updatedDb, null, 2));
}

export const db = {
  menu: {
    get() {
      return readDb().menu;
    },
    getById(id) {
      return readDb().menu.find((item) => item.id === id);
    },
  },
  cart: {
    get() {
      return readDb().cart;
    },
    getById(id) {
      return readDb().cart.find((item) => item.id === id);
    },

    add({ id }) {
      const db = readDb();
      console.log(db.cart);
      const foundCartItem = db.cart.find((item) => item.id === id);
      if (foundCartItem) {
        // If item already exists in cart, increment quantity
        foundCartItem.quantity += 1;
        console.log(foundCartItem);
      } else {
        // If item doesn't exist in cart, add new item
        const newCartItem = db.menu.find((item) => item.id === id);
        db.cart.push({ ...newCartItem, quantity: 1 });
        console.log("not found");
      }
      writeDb(db);
    },

    async increment(id) {
      try {
        const res = await fetch("/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: "increment", itemId: id }),
        });

        if (!res.ok) {
          throw new Error("Failed to increase item qty in cart");
        }

        const { cart } = await res.json();
        // Assuming `setCartItems` is handled in the frontend
        setCartItems({ cart });
        alert("Item quantity increased in cart");
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    },

    updateById(cartItemId, newQuantity) {
      const db = readDb();
      const foundItem = db.cart.find((cartItem) => cartItem.id === cartItemId);
      if (!foundItem) {
        throw new Error(`Item with id ${cartItemId} not found in cart`);
      }
      foundItem.quantity = newQuantity;
      writeDb(db);
    },
    delete(cartItemId) {
      const db = readDb();
      db.cart = db.cart.filter((cartItem) => cartItem.id !== cartItemId);
      console.log({ cart: JSON.stringify(db.cart), cartItemId });
      writeDb(db);
    },
  },
  orders: {
    get() {
      return readDb().orders;
    },
    add(order) {
      const db = readDb();
      db.orders.push(order);
      writeDb(db);
    },
  },
};
