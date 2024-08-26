module.exports = (sequelize, DataTypes) => {
const Permission = sequelize.define("Permission", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    });
    Permission.associate = (models) => {
        Permission.belongsToMany(models.UserGroup,{
            through: models.GroupPermission
        })
    };
    return Permission;
}