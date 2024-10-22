import { Model, DataTypes } from "sequelize";

class BaseModel extends Model {}

export const baseAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Auto-incrementing ID
  },
};

export default BaseModel;
