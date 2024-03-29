"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      ingredients: { type: DataTypes.STRING, allowNull: false },
      direction: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Recipe",
    }
  );
  Recipe.associate = function (models) {
    Recipe.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Recipe;
};
