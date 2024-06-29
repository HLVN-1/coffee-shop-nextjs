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

import { promises as fs } from "fs";
import path from "path";

const dbFilePath = path.join(process.cwd(), "src", "server", "db.json");

async function readDb() {
  const data = await fs.readFile(dbFilePath, "utf8");
  return JSON.parse(data);
}

async function writeDb(data) {
  await fs.writeFile(dbFilePath, JSON.stringify(data, null, 2));
}

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const db = await readDb();
      const cartItems = db.cart || [];
      res.status(200).json({ cart: cartItems });
    } else if (req.method === "POST") {
      const { id, quantity } = req.body;
      const db = await readDb();
      const cartItems = db.cart || [];
      const menuItem = db.menu.find((item) => item.id === id);
      if (!menuItem) {
        return res.status(404).json({ message: "Item not found" });
      }

      cartItems.push({ id, name: menuItem.name, quantity });
      db.cart = cartItems;
      await writeDb(db);
      res.status(200).json({ message: "Item added to cart" });
    } else if (req.method === "DELETE") {
      const db = await readDb();
      db.cart = [];
      await writeDb(db);
      res.status(200).json({ message: "Cart Emptied" });
    } else {
      res
        .status(404)
        .json({ message: "We only support GET, POST, & DELETE requests" });
    }
  } catch (error) {
    console.error("Error handling request:", error.message, error.stack);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
