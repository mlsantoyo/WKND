module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        user_name: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING
        },
        
        mobile_number: {
            type: DataTypes.INTEGER
        }
    })

    Users.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Users.hasMany(models.Event);
        Users.hasMany(models.Guest);
    };

    return Users;

}; //closes the entire modal 