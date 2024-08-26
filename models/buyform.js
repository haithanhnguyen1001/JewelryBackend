const Supplier = require("./supplier");

module.exports = (sequelize, DataTypes) => {

  const BuyForm = sequelize.define("BuyForm", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    total: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    }
  })

  BuyForm.associate = (models) => {
    BuyForm.belongsToMany(models.Product, {
      through: models.BuyFormDetail
    });
    BuyForm.hasMany(models.BuyFormDetail, { onDelete: 'cascade', hooks: true });
    BuyForm.belongsTo(models.Supplier, {
      foreignKey: "SupplierId",
    });
  }

  return BuyForm;

}