module.exports = (sequelize, DataTypes) => {
  const ServiceForm = sequelize.define("ServiceForm", {
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
    phone: {
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
    },
    paid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    remain: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Chưa hoàn thành",
    }
  })

  ServiceForm.associate = (models) => {
    ServiceForm.belongsToMany(models.ServiceType, {
      through: models.ServiceFormDetail
    })
    ServiceForm.hasMany(models.ServiceFormDetail, {onDelete: 'cascade', hooks: true})
  }

  return ServiceForm;
}