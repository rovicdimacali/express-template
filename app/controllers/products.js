// controllers/productsController.js
import ProductsService from "../services/products.js";

export const productControllers = {
  getAllProducts: async (req, res) => {
    try {
      const products = await ProductsService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await ProductsService.getProductById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const product = await ProductsService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const product = await ProductsService.updateProduct(
        req.params.id,
        req.body
      );
      res.json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await ProductsService.deleteProduct(req.params.id);
      res.status(204).send(); // No content
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};
