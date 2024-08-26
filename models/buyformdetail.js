const Product = require("./product");
const BuyForm = require("./buyform");

module.exports = (sequelize, DataTypes) => {

  const BuyFormDetail = sequelize.define("BuyFormDetail", {
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    }
  });

  BuyFormDetail.associate = (models) => {
    BuyFormDetail.belongsTo(models.Product);
    BuyFormDetail.belongsTo(models.ProductType);
    BuyFormDetail.belongsTo(models.BuyForm);
  }

  return BuyFormDetail;

}