
module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define("Supplier", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Supplier.associate = (models) => {
    Supplier.hasMany(models.BuyForm, { onDelete: 'cascade', hooks: true });
  };

  return Supplier;
}


