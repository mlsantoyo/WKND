module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        PINvitation: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            set() {
                this.setDataValue('PINvitation', (Math.floor(100000 + Math.random() * 900000)));
            }
        },
        event_name: {
            type: DataTypes.STRING
        },

        event_date: {
            type: DataTypes.STRING
        },
        event_time: {
            type: DataTypes.TIME
        },
        event_location: {
            type: DataTypes.STRING
        }
    })

    Event.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Event.belongsTo(models.Users);
    };

    return Event;

}; //closes the entire modal 