
module.exports = (sequelize, DataTypes) => {

  const SellForm = sequelize.define("SellForm", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    customer: {
      type: DataTypes.STRING,
      allowNull: false,
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

  SellForm.associate = (models) => {
    SellForm.belongsToMany(models.Product, {
      through: models.SellFormDetail
    })
    SellForm.hasMany(models.SellFormDetail, {onDelete: 'cascade', hooks: true})
  }

  return SellForm;

}