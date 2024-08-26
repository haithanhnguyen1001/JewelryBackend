module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define("Unit", {
      id:{
          type: DataTypes.UUID,
          allownull: false,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
      },
      name:{
          type: DataTypes.STRING,
          allownull: false,
      },
    });

    Unit.associate = (models) => {
      Unit.hasMany(models.ProductType, {
        onDelete: 'cascade', hooks: true
      })
    }

    return Unit;
  }