module.exports = (sequelize, DataTypes) => {

  const ServiceType = sequelize.define("ServiceType", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    }
  })

  ServiceType.associate = (models) => {
    ServiceType.belongsToMany(models.ServiceForm, {
      through: models.ServiceFormDetail
    })
    ServiceType.hasMany(models.ServiceFormDetail, {onDelete: 'cascade', hooks: true})
  }

  return ServiceType;

}