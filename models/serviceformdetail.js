module.exports = (sequelize, DataTypes) => {

  const ServiceFormDetail = sequelize.define("ServiceFormDetail", {
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    subtotal: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    incurred: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    prePaid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    remain: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    deliverDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "1900-01-01",
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Chưa giao"
    }
  });

  ServiceFormDetail.associate = (models) => {
    ServiceFormDetail.belongsTo(models.ServiceForm);
    ServiceFormDetail.belongsTo(models.ServiceType);
  }

  return ServiceFormDetail;

}