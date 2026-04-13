import { supabase } from "../supabase.js";

export const getAllProducts = async (req, res) => {
  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name)");

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name)")
    .eq("id", id)
    .single();

  if (error) return res.status(404).json({ error: "Ürün bulunamadı" });
  res.json(data);
};

export const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;

  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name)")
    .eq("category_id", categoryId);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};
