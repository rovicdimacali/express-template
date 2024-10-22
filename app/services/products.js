import Product from "../models/products.js";
import { Op } from "sequelize";

class ProductsService {
  // Method to get all products with pagination
  async getAllProducts(page = 1, pageSize = 10) {
    const offset = (page - 1) * pageSize; // Calculate offset

    // Find and count all products for pagination
    const { count, rows } = await Product.findAndCountAll({
      limit: pageSize,
      offset: offset,
    });

    // Return the paginated data with total count and total pages
    return {
      totalItems: count, // Total number of products
      totalPages: Math.ceil(count / pageSize), // Calculate total number of pages
      currentPage: page,
      result: rows,
    };
  }

  async getProductById(productId) {
    // Fetch the current product by primary key
    const product = await Product.findByPk(productId);
    if (!product) throw new Error("Product not found");

    // Fetch the next product based on createdAt date
    const nextProduct = await Product.findOne({
      where: {
        createdAt: {
          [Op.gt]: product.createdAt, // Condition to find products created after the current product
        },
      },
      order: [["createdAt", "ASC"]], // Order by createdAt in ascending order
    });

    return {
      product,
      nextProduct: nextProduct?.id || null, // Return null if there is no next product
    };
  }

  async createProduct(productData) {
    return await Product.create(productData); // Create a new product
  }

  async updateProduct(productId, updatedData) {
    const product = await Product.findByPk(productId);
    if (!product) throw new Error("Product not found");
    return await product.update(updatedData); // Update product data
  }

  async deleteProduct(productId) {
    const product = await Product.findByPk(productId);
    if (!product) throw new Error("Product not found");
    return await product.destroy(); // Delete the product
  }
}

export default new ProductsService();
