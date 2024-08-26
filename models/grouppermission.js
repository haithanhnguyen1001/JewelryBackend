module.exports = (sequelize, DataTypes) => {
const GroupPermission = sequelize.define("GroupPermission", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    });
    GroupPermission.associate = (models) => {
        GroupPermission.belongsTo(models.UserGroup)
    };
    return GroupPermission;
}