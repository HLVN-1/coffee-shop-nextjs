import { db } from "@/server/db";

export default function handler(req, res) {
  if (req.method === "DELETE") {
    console.log("req query here", req.query);
    const id = req.query.id;
    const numberId = Number(id);
    db.cart.delete(numberId);
    res.status(200).json({ message: "cart item removed" });
  } else if (req.method === "PUT") {
    const id = req.query.id;
    const numberId = Number(id);
    const updatedCartItem = db.cart.updateById(numberId, req.body.quantity);
    res.status(200).json({ message: "Cart item updated, " });
  } else {
    res.status(404).json({ message: "We only support DELETE & PUT requests" });
  }
}
