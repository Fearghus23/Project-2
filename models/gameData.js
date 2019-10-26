module.exports = function(sequelize, DataTypes) {
  var GameData = sequelize.define("GameData", {
    curentLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    unlockedLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    lives: {
      type: DataTypes.INTEGER,
      defaultValue: 3
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    currency: {
      type: DataTypes.INTEGER,
      defaultValue: 100
    },
    powerupSlow: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    powerupFreeze: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    powerupDestroy: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    powerup4: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  GameData.associate = function(models) {
    GameData.belongsTo(models.UserData, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return GameData;
};
