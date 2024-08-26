module.exports = (sequelize, DataTypes) => {

    const ReportDetail = sequelize.define("ReportDetail", {
      totalImport: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      totalExport: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      beginStock: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      endStock: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
    });
  
    ReportDetail.associate = (models) => {
      ReportDetail.belongsTo(models.Product);
      ReportDetail.belongsTo(models.ProductType);
      ReportDetail.belongsTo(models.Report);
    }
  
    return ReportDetail;
  
  }