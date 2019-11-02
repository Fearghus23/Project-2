// randomstring package for creating unique player IDs
// https://www.npmjs.com/package/randomstring

module.exports = function(sequelize, DataTypes) {
  var UserData = sequelize.define("UserData", {
    playerID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  UserData.associate = function(models) {
    UserData.hasOne(models.GameData, {});
  };
  return UserData;
};
