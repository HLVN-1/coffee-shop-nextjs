import { db } from "@/server/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    const cartItems = db.cart.get();
    res.status(200).json({ menu: cartItems });
  } else if (req.method === "POST") {
    const { id, quantity } = req.body;
    db.cart.add({ id, quantity });
    res.status(200).json({ message: "Item added to cart" });
  } else {
    res.status(404).json({ message: "We only support GET requests" });
  }
}
