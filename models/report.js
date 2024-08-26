module.exports = (sequelize, DataTypes) => {
    const Report = sequelize.define("Report", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      month: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        max: 12,
        min: 1
      },
      year: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    })
  
    Report.associate = (models) => {
      Report.belongsToMany(models.Product, {
        through: models.ReportDetail
      })
      Report.hasMany(models.ReportDetail);
    }
  
    return Report;
}