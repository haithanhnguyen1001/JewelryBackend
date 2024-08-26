'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, BuyFormDetail, SellFormDetail, ReportDetail, Unit }) {
      // define association here
      this.hasMany(Product, {
        onDelete: 'cascade', hooks: true
      })
      this.hasMany(BuyFormDetail, {
        onDelete: 'cascade', hooks: true
      })
      this.hasMany(SellFormDetail, {
        onDelete: 'cascade', hooks: true
      })
      this.hasMany(ReportDetail, {
        onDelete: 'cascade', hooks: true
      })
      this.belongsTo(Unit);
    }
  }
  ProductType.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    unit: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    interest: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.0,
    }
  }, {
    sequelize,
    modelName: 'ProductType',
  });
  return ProductType;
};