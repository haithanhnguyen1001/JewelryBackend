module.exports = (sequelize, DataTypes) => {

  const SellFormDetail = sequelize.define("SellFormDetail", {
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

  SellFormDetail.associate = (models) => {
    SellFormDetail.belongsTo(models.Product);
    SellFormDetail.belongsTo(models.ProductType);
    SellFormDetail.belongsTo(models.SellForm);
  }

  return SellFormDetail;

}