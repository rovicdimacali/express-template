import { DataTypes } from "sequelize";
import BaseModel, { baseAttributes } from "./base.js"; // Import the base model
import sequelize from "../db/index.js"; // Import the sequelize instance

class Product extends BaseModel {}

Product.init(
  {
    ...baseAttributes, // Inherit base attributes like id
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize, // Pass sequelize instance here
    modelName: "Product", // Specify the model name
    tableName: "products", // Specify the table name
    timestamps: true, // Add createdAt and updatedAt timestamps
  }
);

export default Product;
