module.exports = function(sequelize, DataTypes) {
var Guest = sequelize.define("Guest", {
    attending: {
        type: DataTypes.BOOLEAN
    }
})
Guest.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Guest.belongsTo(models.Users);
    Guest.belongsTo(models.Event);
  };

  return Guest;
}
