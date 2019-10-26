module.exports = function(sequelize, DataTypes) {
  var GameData = sequelize.define("Gamedata", {
    curentLevel: {
      type: DataTypes.INT,
      defaultValue: 1
    },
    unlockedLevel: {
      type: DataTypes.INT,
      defaultValue: 1
    },
    lives: {
      type: DataTypes.INT,
      defaultValue: 3
    },
    score: {
      type: DataTypes.INT,
      defaultValue: 0
    },
    currency: {
      type: DataTypes.INT,
      defaultValue: 100
    },
    powerupSlow: {
      type: DataTypes.INT,
      defaultValue: 0
    },
    powerupFreeze: {
      type: DataTypes.INT,
      defaultValue: 0
    },
    powerupDestroy: {
      type: DataTypes.INT,
      defaultValue: 0
    },
    powerup4: {
      type: DataTypes.INT,
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
