
module.exports = (sequelize, DataTypes) => {
const Parameter = sequelize.define("Parameter", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allownull: false,
    },
    value:{
        type: DataTypes.INTEGER,
        allownull: false
    }
    });
    return Parameter;
}