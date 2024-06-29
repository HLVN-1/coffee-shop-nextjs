import { db } from "@/server/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    const cartItems = db.cart.get();
    res.status(200).json({ cart: cartItems });
  } else if (req.method === "POST") {
    db.cart.add(req.body);
    res.status(200).json({ message: "Item added to cart" });
  } else if (action === "increment") {
    // Increment quantity of an item in cart
    try {
      db.cart.increment(itemId); // Implement this method in your db module
      const updatedCartItems = db.cart.get();
      res.status(200).json({ cart: updatedCartItems });
    } catch (error) {
      res
        .status(400)
        .json({ message: `Failed to increment item: ${error.message}` });
    }
  } else if (action === "decrement") {
    // Decrement quantity of an item in cart
    try {
      db.cart.decrement(itemId); // Implement this method in your db module
      const updatedCartItems = db.cart.get();
      res.status(200).json({ cart: updatedCartItems });
    } catch (error) {
      res
        .status(400)
        .json({ message: `Failed to decrement item: ${error.message}` });
    }
  } else {
    res.status(404).json({ message: "We only support GET and POST requests" });
  }
}
