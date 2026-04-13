import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import productRoutes from "./src/routes/products.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.json({ message: "CakeShop API çalışıyor" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
