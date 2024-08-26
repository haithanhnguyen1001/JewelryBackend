
module.exports = (sequelize, DataTypes) => {
const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
    }
    });
    User.associate = (models) => {
        User.belongsTo(models.UserGroup)
    };
    return User;
}