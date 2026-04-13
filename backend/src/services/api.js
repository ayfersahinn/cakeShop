const BASE_URL = "http://172.29.42.99:3000/api";

export const productService = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
  },

  getById: async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    return data;
  },

  getByCategory: async (categoryId) => {
    const response = await fetch(`${BASE_URL}/products/category/${categoryId}`);
    const data = await response.json();
    return data;
  },
};
