import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL DB using Sequelize");
  } catch (error) {
    console.error("Database Connection Error", error);
    throw error;
  }
};

export default sequelize;
